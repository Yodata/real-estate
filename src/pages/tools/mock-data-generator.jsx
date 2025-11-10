import React, { useState, useRef, Fragment } from "react";
import { useForm, Controller, useWatch } from "react-hook-form";
import { Select, Input } from "@/components/Forms";
import { Button } from "@/components/Button";
import Highlight, { defaultProps } from "prism-react-renderer";
import clsx from "clsx";
import axios from "axios";

const API_BASE_URL =
  "https://vxkxcz70mg.execute-api.us-west-2.amazonaws.com/dev/checkSatgingApiKey";
// const messages = [
//   "award#create",
//   "award#delete",
//   "award#seriescreate",
//   "award#seriesdelete",
//   "award#seriesupdate",
//   "award#teamcreate",
//   "award#teamdelete",
//   "award#teammemberadd",
//   "award#teammemberremove",
//   "award#teamupdate",
//   "award#update",
//   "contact#activity",
//   "contact#add",
//   "contact#collectioncreate",
//   "contact#collectiondelete",
//   "contact#collectionmemberadd",
//   "contact#collectionmemberremove",
//   "contact#comment",
//   "contact#delete",
//   "contact#plancreate",
//   "contact#plandelete",
//   "contact#update",
//   "franchise#transactionreport",
//   "lead#accept",
//   "lead#add",
//   "lead#asssign",
//   "lead#reject",
//   "lead#retract",
//   "lead#update",
//   "listing#delete",
//   "listing#update",
//   "marketing#create",
//   "marketing#delete",
//   "marketing#memberadd",
//   "marketing#memberremove",
//   "marketingpreferences#subscribe",
//   "marketingpreferences#unsubscribe",
//   "profile#add",
//   "profile#serviceareaadd",
//   "profile#teamcreate",
//   "profile#teamdelete",
//   "profile#teammemberadd",
//   "profile#teammemberremove",
//   "profile#update",
//   "servicearea#create",
//   "servicearea#delete",
//   "servicearea#update",
//   "team#create",
//   "team#delete",
//   "website#askquestion",
//   "website#listingoffer",
//   "website#propertysearchsave",
//   "website#register",
//   "website#requestappointment",
//   "website#requestshowing",
//   "website#saveproperty",
//   "website#searchproperties",
//   "website#shareproperty",
//   "website#sharepropertyvaluereport",
//   "website#viewproperty",
//   "website#viewpropertyvaluereort",
// ];

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
        headers: { "Content-Type": "application/json" }
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
    if (!pod || !apikey) return;

    const isValidPod =
      pod.startsWith("https://") && pod.includes(".bhhs.hsfaffiliates.com");
    if (!isValidPod) {
      setIsValidated(false);
      setValidationError(
        "Pod must start with https:// and contain .bhhs.hsfaffiliates.com"
      );
      return;
    }

    async function validateAndFetch() {
      try {
        const isValid = await checkStagingApiKey(apikey);
        if (!isValid) {
          setIsValidated(false);
          setValidationError("Invalid API Key.");
          setSubscriptionsAvailable(true);
          setDynamicTopicOptions([]);
          return;
        }
        const podName = extractPodName(pod);
        const topics = await getSubscriptions(podName);
        if (!topics || topics.length == 0) {
          setSubscriptionsAvailable(false);
           setDynamicTopicOptions([]);
           return
        } 
          setSubscriptionsAvailable(true);
          setDynamicTopicOptions(topics); // NEW: store topics
          setIsValidated(true);
          setValidationError("");
        
      } catch (err) {
        setIsValidated(false);
  setSubscriptionsAvailable(false);
  setDynamicTopicOptions([]);   // <-- critical
  setValidationError("Invalid API Key or Unauthorized.");
      }
    }

    validateAndFetch();
  }, [pod, apikey]);

  function extractPodName(pod) {
    return pod.replace("https://", "").split(".")[0]; // take the first section
  }
  function getSubscriptionsForPod(subscriptions, podName) {
    const match = subscriptions.items.find((item) =>
      item.agent.includes(`${podName}.dev.bhhs.hsfaffiliates.com`)
    );

    if (!match) return [];

    return ["", ...match.subscribes.map((sub) => sub + "#add")];
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

  const onSubmit = (json) => {
    setTopic(json.topic);
    const _topic = json.topic.replace("#", "/");
    const target = `/api/schema/mock/${_topic}`;
    axios
      .get(target)
      .then((res) => {
        let code = JSON.stringify(res.data, null, 2);
        setApiResponse(code);
      })
      .catch((error) => {
        console.error(error);
        setApiResponse(error.message);
      });
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
        {isValidated === true && subscriptionsAvailable === true  && (
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
      onSelect={numberOfMessagesSelected}
    />
  </>
)}
        <Button type="submit">Submit</Button>
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
