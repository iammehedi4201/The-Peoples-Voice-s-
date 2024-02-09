// import React, { useState } from "react";
// import OpenAI from "openai-api";

// // Define the OpenAI API key
// const openaiApiKey = "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";

// // Initialize the OpenAI API client
// const openai = new OpenAI(openaiApiKey);

// function TextGenerator() {
//   const [topic, setTopic] = useState("");
//   const [text, setText] = useState("");

//   const handleInputChange = (event) => {
//     setTopic(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const prompt = `Write an article on the topic "${topic}".`;
//     const maxTokens = 800;
//     const response = await openai.complete({
//       engine: "text-davinci-003",
//       prompt: prompt,
//       maxTokens: maxTokens,
//       n:1,
//       stop:"\n",
//     });
//      console.log(response);
//   };

//   return (
//     <div style={{marginTop:"170px"}}>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Topic:
//           <input type="text" value={topic} onChange={handleInputChange} />
//         </label>
//         <button type="submit">Generate</button>
//       </form>
//       <p>{text}</p>
//     </div>
//   );
// }

// export default TextGenerator;
