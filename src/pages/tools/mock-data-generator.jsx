import React, { useState, useRef, Fragment } from "react";
import { useForm, Controller, useWatch } from "react-hook-form";
import { Select, Input } from "@/components/Forms";
import { Button } from "@/components/Button";
import Highlight, { defaultProps } from "prism-react-renderer";
import clsx from "clsx";
import axios from "axios";
import { profile } from "console";

const API_BASE_URL =
  "https://vxkxcz70mg.execute-api.us-west-2.amazonaws.com/dev/checkSatgingApiKey";
const actions = {
 award:[
  "realestate/award#delete",
  "realestate/award#seriescreate",
  "realestate/award#seriesdelete",
  "realestate/award#seriesupdate",
  "realestate/award#teamcreate",
  "realestate/award#teammemberadd",
  "realestate/award#teammemberremove",
  "realestate/award#teamupdate",
  "realestate/award#update",
  "realestate/award#create" ],
  contact:[
  "realestate/contact#activity",
  "realestate/contact#add",
  "realestate/contact#collectioncreate",
  "realestate/contact#collectiondelete",
  "realestate/contact#collectionmemberadd",
  "realestate/contact#collectionmemberremove",
  "realestate/contact#comment",
  "realestate/contact#delete",
  "realestate/contact#planupdate",
  "realestate/contact#plandelete",
  "realestate/contact#update"] ,

 franchise:[ "realestate/franchise#transactionreport",
  "realestate/franchise#listingreport"] , 
lead: [ "realestate/lead#accept",
  "realestate/lead#add",
  "realestate/lead#asssign",
  "realestate/lead#reject",
  "realestate/lead#retract",
  "realestate/lead#update"] ,
  listing: [
  "realestate/listing#delete",
  "realestate/listing#update",
  "realestate/listing#updatebuyercompensation"] ,
 marketigprogram: ["realestate/marketingprogram#create",
  "realestate/marketingprogram#update",
  "realestate/marketingprogram#delete",
  "realestate/marketingprogram#memberadd",
  "realestate/marketingprogram#memberremove",
  "realestate/marketingprogram#openhouseeventsummary"] ,
  marketingpreferences: [
  "realestate/marketingpreferences#subscribe",
  "realestate/marketingpreferences#unsubscribe"] ,
  profile:[
  "realestate/profile#add",
  "realestate/profile#serviceareaadd",
  "realestate/profile#teamcreate",
  "realestate/profile#teamdelete",
  "realestate/profile#teammemberadd",
  "realestate/profile#teammemberremove",
  "realestate/profile#update"] ,
  servicearea:[
  "realestate/servicearea#create",
  "realestate/servicearea#delete",
  "realestate/servicearea#update"],
  website:[
  "realestate/website#askquestion",
  "realestate/website#listingoffer",
  "realestate/website#register",
  "realestate/website#requestappointment",
  "realestate/website#requestshowing",
  "realestate/website#shareproperty",
  "realestate/website#saveproperty",
  "realestate/website#propertysearchsave",
  "realestate/website#searchproperties",
  "realestate/website#viewproperty",
  "realestate/website#viewpropertyvaluereport",
  "realestate/website#sharepropertyvaluereport",
  "realestate/website#subscribemarketactivityreport",
  "realestate/website#listinginquiry",
  "realestate/website#planningguide"]
};

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

  const controller = new AbortController(); // <-- create controller
  const { signal } = controller;

  const isValidPod =
    pod.startsWith("https://") && pod.includes(".bhhs.hsfaffiliates.com");

  if (!isValidPod) {
    setIsValidated(false);
    setValidationError("Pod must start with https:// and contain .bhhs.hsfaffiliates.com");
    return;
  }

  async function validateAndFetch() {
    try {
      const isValid = await checkStagingApiKey(apikey, signal);
      if (signal.aborted) return; // <-- do nothing if cancelled

      if (!isValid) {
        setIsValidated(false);
        setValidationError("Invalid API Key.");
        setSubscriptionsAvailable(true);
        setDynamicTopicOptions([]);
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

  return () => controller.abort(); // <-- CANCEL PREVIOUS REQUEST ON CHANGE
}, [pod, apikey]);

  // React.useEffect(() => {
  //   if (!pod || !apikey) return;

  //   const isValidPod =
  //     pod.startsWith("https://") && pod.includes(".bhhs.hsfaffiliates.com");
  //   if (!isValidPod) {
  //     setIsValidated(false);
  //     setValidationError(
  //       "Pod must start with https:// and contain .bhhs.hsfaffiliates.com"
  //     );
  //     return;
  //   }

  //   async function validateAndFetch() {
  //     try {
  //       const isValid = await checkStagingApiKey(apikey);
  //       if (!isValid) {
  //         setIsValidated(false);
  //         setValidationError("Invalid API Key.");
  //         setSubscriptionsAvailable(true);
  //         setDynamicTopicOptions([]);
  //         setNumberOfMessages("1");
  //         setTopic("select a topic");
  //         return;
  //       }
  //       const podName = extractPodName(pod);
  //       const topics = await getSubscriptions(podName);
  //       if (!topics || topics.length == 0) {
  //         setSubscriptionsAvailable(false);
  //          setDynamicTopicOptions([]);
  //          return
  //       } 
  //         setSubscriptionsAvailable(true);
  //         setDynamicTopicOptions(topics); // NEW: store topics
  //         setIsValidated(true);
  //         setValidationError("");
        
  //     } catch (err) {
  //       setIsValidated(false);
  // setSubscriptionsAvailable(false);
  // setDynamicTopicOptions([]);   // <-- critical
  // setValidationError("Invalid API Key or Unauthorized.");
  //     }
  //   }

  //   validateAndFetch();
  // }, [pod, apikey]);

  function extractPodName(pod) {
    return pod.replace("https://", "").split(".")[0]; // take the first section
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
    return userActions;
  
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
