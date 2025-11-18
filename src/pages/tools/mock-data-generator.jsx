import React, { useState, useRef, Fragment } from "react";
import { useForm, Controller, useWatch } from "react-hook-form";
import { Select, Input } from "@/components/Forms";
import { Button } from "@/components/Button";
import Highlight, { defaultProps } from "prism-react-renderer";
import clsx from "clsx";
import axios from "axios";
import { off } from "process";

const API_BASE_URL =
  "https://vxkxcz70mg.execute-api.us-west-2.amazonaws.com/dev/checkSatgingApiKey";
const actions = {
  award: [
    "realestate/award#teamcreate",
    "realestate/award#teammemberadd",
    "realestate/award#teammemberremove",
    "realestate/award#teamupdate"
  ],
  contact: [
    "realestate/contact#add",
    "realestate/contact#delete",
    "realestate/contact#update",
  ],

  franchise: [
    // "realestate/franchise#transactionreport",//
  ], 
  lead: [
    "realestate/lead#accept",
    "realestate/lead#update",
  ],
  listing: [
    "realestate/listing#delete",
    "realestate/listing#update",
    "realestate/listing#updatebuyercompensation",
  ],
  marketigprogram: [
    "realestate/marketingprogram#create",
    "realestate/marketingprogram#update",
    "realestate/marketingprogram#delete",
    "realestate/marketingprogram#memberadd",
    "realestate/marketingprogram#memberremove",
    "realestate/marketingprogram#openhouseeventsummary",
  ],
  marketingpreferences: [
    "realestate/marketingpreferences#subscribe",
    "realestate/marketingpreferences#unsubscribe",
  ],
  profile: [
    "realestate/profile#add",
    "realestate/profile#teamcreate",
    "realestate/profile#teamdelete",
    "realestate/profile#teammemberadd",
    "realestate/profile#teammemberremove",
    "realestate/profile#update(broker)",
    "realestate/profile#update(agent)",
    "realestate/profile#update(office)",
    "realestate/profile#office",
  ],
  servicearea: [
    "realestate/servicearea#create",
    "realestate/servicearea#delete",
    "realestate/servicearea#update",
  ],
  website: [
    "realestate/website#askquestion",
    "realestate/website#listingoffer",
    "realestate/website#register",
    "realestate/website#requestshowing",
    "realestate/website#shareproperty",
    "realestate/website#saveproperty",
    "realestate/website#propertysearchsave",
    "realestate/website#searchproperties",
    "realestate/website#viewproperty", 
    "realestate/website#viewpropertyvaluereport",
    "realestate/website#sharepropertyvaluereport",
    "realestate/website#subscribemarketactivityreport",
    "realestate/website#planningguide",
  ],
  // broker:[
  //   "broker/offices"
  // ],
  // office:[
  //   "office/agents"
  // ]
};

const actionObj = {
   "realestate/award#teamcreate":"realestate/award/teamcreate",
    "realestate/award#teammemberadd":"realestate/award/teammemberadd",
    "realestate/award#teammemberremove":"realestate/award/teammemberremove",
    "realestate/award#teamupdate":"realestate/award/teamupdate",
    "realestate/contact#add": "realestate/contact/add",
    "realestate/contact#delete":  "realestate/contact/delete",
    "realestate/contact#update": "realestate/contact/update",
    "realestate/lead#accept": "realestate/lead/accept",
    "realestate/lead#update": "realestate/lead/update",
    "realestate/listing#delete": "realestate/listing/delete",
    "realestate/listing#update": "realestate/listing/update",
    "realestate/listing#updatebuyercompensation": "realestate/listing/updatebuyercompensation",
    "realestate/marketingprogram#create": "realestate/marketingprogram/create",
    "realestate/marketingprogram#update": "realestate/marketingprogram/update",
    "realestate/marketingprogram#delete": "realestate/marketingprogram/delete",
    "realestate/marketingprogram#memberadd": "realestate/marketingprogram/memberadd",
    "realestate/marketingprogram#memberremove": "realestate/marketingprogram/memberremove",
    "realestate/marketingprogram#openhouseeventsummary": "realestate/marketingprogram/openhouseeventsummary",
    "realestate/marketingpreferences#subscribe": "realestate/marketingpreferences/subscribe",
    "realestate/marketingpreferences#unsubscribe":  "realestate/marketingpreferences/unsubscribe",
    "realestate/profile#add": "realestate/profile/add",
    "realestate/profile#teamcreate": "realestate/profile/teamcreate",
    "realestate/profile#teamdelete": "realestate/profile/teamdelete",
    "realestate/profile#teammemberadd": "realestate/profile/teammemberadd",
    "realestate/profile#teammemberremove": "realestate/profile/teammemberremove",
    "realestate/profile#update": "realestate/profile/update",
    "realestate/profile#update(broker)": "realestate/profile/broker",
    "realestate/profile#update(agent)": "realestate/office/agents",
    "realestate/profile#update(office)" : "realestate/broker/offices",
    "realestate/servicearea#create":  "realestate/servicearea/create",
    "realestate/servicearea#delete": "realestate/servicearea/delete",
    "realestate/servicearea#update": "realestate/servicearea/update",
    "realestate/website#askquestion": "realestate/website/askquestion",
    "realestate/website#listingoffer": "realestate/website/listingoffer",
    "realestate/website#register": "realestate/website/register",
    "realestate/website#requestshowing": "realestate/website/requestshowing",
    "realestate/website#shareproperty": "realestate/website/shareproperty",
    "realestate/website#saveproperty": "realestate/website/saveproperty",
    "realestate/website#propertysearchsave": "realestate/website/propertysearchsave",
    "realestate/website#searchproperties": "realestate/website/searchproperties",
    "realestate/website#viewproperty": "realestate/website/viewproperty", 
    "realestate/website#viewpropertyvaluereport": "realestate/website/viewpropertyvaluereport",
    "realestate/website#sharepropertyvaluereport": "realestate/website/sharepropertyvaluereport",
    "realestate/website#subscribemarketactivityreport": "realestate/website/subscribemarketactivityreport",
    "realestate/website#planningguide": "realestate/website/planningguide",
}
const noOfMessagesOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/*
  topic: '',
  targeturl: '',
  optionalsProbability: 1.0,
  fixedProbability: false,
  additionalProperties: false,
*/

const formData = {
  topic: {
    name: "topic",
    type: "select",
    options: [],
    // placeholder: 'select a topic',
    caption: undefined,
    required: true,
  },
  numberOfMessages: {
    name: "numberOfMessages",
    type: "select",
    options: noOfMessagesOptions,
    placeholder: "select number of messages to generate",
    caption: undefined,
    required: true,
  },
};

export default function MockDataGUI(props) {
  const { className } = props;
  const [apiResponse, setApiResponse] = useState("");
  const [topic, setTopic] = useState("select a topic");
  const [numberOfMessages, setNumberOfMessages] = useState("1");
  const formStyle = clsx("form-input", className);
  const [isValidated, setIsValidated] = useState(null);
  const [validationError, setValidationError] = useState("");
  const [subscriptionsAvailable, setSubscriptionsAvailable] = useState(true);
  const {
    control,
    handleSubmit,
    formState: { errors, touchedFields, submitCount, isValid },
  } = useForm({
    mode: "change",
    useNativeValidation: true,
    defaultValues: {
      topic: "",
      numberOfMessages: 1,
      // targeturl: '',
      // optionalsProbability: 1.0,
      // fixedProbability: false,
      // additionalProperties: false,
      // maxItems: 3,
      // maxDepth: 3,
    },
  });

  const pod = useWatch({ control, name: "pod" });
  const apikey = useWatch({ control, name: "apikey" });
  const frm = useRef(null, handleFrmChange);
  const editorRef = useRef(null);
  const [dynamicTopicOptions, setDynamicTopicOptions] = useState([]);

  async function checkStagingApiKey(key) {
    try {
      const response = await axios.post(
        API_BASE_URL,
        { key },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status !== 200) return false;

      return Boolean(response.data);
    } catch (error) {
      console.error("API Error:", error.response?.data || error.message);
      return false;
    }
  }

  async function getSubscriptions(pod) {
    try {
      const res = await axios.get(
        "https://dev.bhhs.hsfaffiliates.com/settings/subscriptions",
        {
          headers: {
            "x-api-key": "R1BywylDleLpjXFDODgDFJ1Ni3UFbfb2UMfcMSRtuM",
          },
        }
      );

      const topics = getSubscriptionsForPod(res.data, pod);
      return topics;
    } catch (error) {
      console.error("API Error:", error.response?.data || error.message);
    }
  }

  React.useEffect(() => {
    // Skip until both fields have values
    if (!pod || !apikey) return;

    const controller = new AbortController();
    const { signal } = controller;

    const isValidPod =
      pod.startsWith("https://") && pod.includes(".bhhs.hsfaffiliates.com");

    if (!isValidPod) {
      setIsValidated(false);
      setValidationError(
        "Pod must start with https:// and contain .bhhs.hsfaffiliates.com"
      );
      setDynamicTopicOptions([]);
      setTopic("");
      setNumberOfMessages("1");
      setApiResponse("");
      return;
    }

    // Reset validation state each time either value changes
    setIsValidated(null);
    setValidationError("");
    setDynamicTopicOptions([]);

    async function validateAndFetch() {
      try {
        const isValid = await checkStagingApiKey(apikey, signal);
        if (signal.aborted) return;

        if (!isValid) {
          setIsValidated(false);
          setValidationError("Invalid API Key.");
          setSubscriptionsAvailable(true);
          setDynamicTopicOptions([]);
          setTopic(""); // 🔥 clear topic
          setNumberOfMessages("1"); // 🔥 reset number
          setApiResponse(""); // 🔥 clear old output
          return;
        }

        const podName = extractPodName(pod);
        const topics = await getSubscriptions(podName);
        if (signal.aborted) return;

        if (!topics || topics.length === 0) {
          setSubscriptionsAvailable(false);
          setDynamicTopicOptions([]);
          return;
        }

        setIsValidated(true);
        setValidationError("");
        setSubscriptionsAvailable(true);
        setDynamicTopicOptions(topics);
      } catch (err) {
        if (signal.aborted) return;
        setIsValidated(false);
        setSubscriptionsAvailable(false);
        setDynamicTopicOptions([]);
        setValidationError("Invalid API Key or Unauthorized.");
      }
    }

    validateAndFetch();

    return () => controller.abort();
  }, [pod, apikey]);

  function extractPodName(pod) {
    return pod
      .replace(/^https?:\/\//, "") // removes http:// or https://
      .replace(/\/$/, "") // removes trailing slash if any
      .split(".")[0]; // take first section (e.g., "aem-web-dev")
  }

  function getActionsFromSubscriptions(subscriptions) {
    const result = [];

    subscriptions.forEach((sub) => {
      const key = sub.toLowerCase(); // ensure consistent match
      if (actions[key]) {
        result.push(...actions[key]);
      }
    });

    return result;
  }

  function getSubscriptionsForPod(subscriptions, podName) {
    const match = subscriptions.items.find((item) =>
      item.agent.includes(`${podName}.dev.bhhs.hsfaffiliates.com`)
    );

    if (!match) return [];

    const cleanedSubs = match.subscribes.map((sub) =>
      sub.replace("realestate/", "")
    );

    const userActions = getActionsFromSubscriptions(cleanedSubs);
    return ["", ...userActions];
  }

  const content = {
    target: {
      name: "pod",
      type: "text",
      placeholder: "https://<pod>.dev.bhhs.hsfaffiliates.com/",
      caption: "vendor pod name",
      required: true,
    },
    apikey: {
      name: "apikey",
      type: "password",
      placeholder: "Un4omdlDleLpjXFDODgnif4b5nw3lfb2UunilnRtuM",
      required: true,
      caption: "dev x-api-key of the vendor",
    },
  };

  const callPublishApi = async (body, setApiResponse) => {
    const apiUrl =
      "https://gq2x4idumg.execute-api.us-west-2.amazonaws.com/mockData"; // replace with real endpoint

    try {
      const response = await axios.post(apiUrl, body, {
        headers: { "Content-Type": "application/json" },
        timeout: 15000,
      });

      console.log("✅ API Response Status:", response.status);
      console.log("✅ API Response Data:", response.data);

      // ✅ Format and set response JSON
      const formatted = JSON.stringify({
  ...response.data,
  result: {
    ...response.data.result,
    topic: body.topic
  }
}, null, 2);
      setApiResponse(formatted);
    } catch (error) {
      let errorMessage;

      if (error.response) {
        console.error(
          "❌ API Error:",
          error.response.status,
          error.response.data
        );
        errorMessage = JSON.stringify(error.response.data, null, 2);
      } else if (error.request) {
        console.error("❌ No response received from server:", error.request);
        errorMessage = "No response received from server.";
      } else {
        console.error("❌ Request setup error:", error.message);
        errorMessage = error.message;
      }

      // ✅ Set readable error message in UI
      setApiResponse(errorMessage);
    }
  };

  function extractPod(pod) {
    return pod
      .replace(/^https?:\/\//, "") // remove http:// or https://
      .replace(/\/$/, ""); // remove trailing slash
  }
  const onSubmit = async (json) => {
    const pod = json.pod?.trim();
    const topic = json.topic?.trim();
    const messages = Number(json.numberOfMessages);
    const bucket = "reflexmockdata";

    // --- 1️⃣ Basic presence validation ---
    if (!pod || !topic || !messages || !bucket) {
      setApiResponse(
        JSON.stringify(
          {
            status: "error",
            message: "Missing required fields.",
            missing: {
              pod: !pod ? "required" : undefined,
              topic: !topic ? "required" : undefined,
              messages: !messages ? "required" : undefined,
              bucket: !bucket ? "required" : undefined,
            },
          },
          null,
          2
        )
      );
      return;
    }

    // --- 2️⃣ Validate pod format ---
    const validPodSuffix = "dev.bhhs.hsfaffiliates.com";
    if (!pod.endsWith(validPodSuffix) && !pod.endsWith(`${validPodSuffix}/`)) {
      setApiResponse(
        JSON.stringify(
          { status: "error", message: `Pod must end with "${validPodSuffix}"` },
          null,
          2
        )
      );
      return;
    }

    // --- 3️⃣ Validate messages count ---
    if (isNaN(messages) || messages <= 0) {
      setApiResponse(
        JSON.stringify(
          {
            status: "error",
            message: "Messages must be a valid number greater than 0.",
          },
          null,
          2
        )
      );
      return;
    }

    if (messages > 10) {
      setApiResponse(
        JSON.stringify(
          { status: "error", message: "Messages cannot exceed 10." },
          null,
          2
        )
      );
      return;
    }

    // --- 4️⃣ Sanitize inputs ---
    const topicSlug =actionObj[topic];
    const _pod = extractPod(pod);

    // --- 5️⃣ Proceed to API call ---
    await callPublishApi(
      {
        pod: _pod,
        bucket,
        path: `${topicSlug}.json`,
        messages,
        topic
      },
      setApiResponse
    );
  };

  const onError = (input) => {
    console.error("ERROR", errors);
    setApiResponse(JSON.stringify(errors));
  };

  function handleFrmChange(input) {
    console.log("FORM_CHANGE", input);
  }

  function topicSelected(e) {
    console.log("TOPIC_SELECTED", e.target.value);
    setTopic(e.target.value);
  }
  function numberOfMessagesSelected(e) {
    console.log("No of Messages to Generate", e.target.value);
    setNumberOfMessages(e.target.value);
  }

  return (
    <>
      <h2>Create Fake Data</h2>
      {/* <div className="prose">
        <p>{topic}</p>
      </div> */}
      <form name="MockInputForm" onSubmit={handleSubmit(onSubmit, onError)}>
        <Input {...content.target} control={control} />
        <Input {...content.apikey} control={control} />
        {isValidated === false && (
          <p style={{ marginTop: "8px" }}>Invalid API Key</p>
        )}

        {isValidated === true && subscriptionsAvailable === false && (
          <p style={{ marginTop: "8px" }}>
            No subscriptions found for the provided pod.
          </p>
        )}
        {isValidated === true && subscriptionsAvailable === true && (
          <>
            <Select
              name="topic"
              type="select"
              options={dynamicTopicOptions}
              control={control}
              onChange={topicSelected}
            />
            <Select
              {...formData.numberOfMessages}
              control={control}
              // onChange={(e) =>
              //   setNumberOfMessages(parseInt(e.target.value, 10))
              // }
            />
          </>
        )}
        {isValidated === true && subscriptionsAvailable === true &&
          <Button
          type="submit"
          disabled={!isValidated || !subscriptionsAvailable}
          >
          Submit
        </Button>
        }
      </form>
      <Highlight
        {...defaultProps}
        code={apiResponse}
        language={"json"}
        theme={undefined}
      >
        {({ className, style, tokens, getTokenProps }) => (
          <pre className={className} style={style}>
            <code>
              {tokens.map((line, lineIndex) => (
                <Fragment key={lineIndex}>
                  {line
                    .filter((token) => !token.empty)
                    .map((token, tokenIndex) => (
                      <span key={tokenIndex} {...getTokenProps({ token })} />
                    ))}
                  {"\n"}
                </Fragment>
              ))}
            </code>
          </pre>
        )}
      </Highlight>
    </>
  );
}
