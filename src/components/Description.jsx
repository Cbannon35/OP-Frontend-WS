import React, { useState, useEffect } from "react";
import { fetchDescription } from "../utils";

/* Final Task

When an item is added, call the following API to generate 
a description for the item.

Then, add the description to the shopping list alongside 
the item's name.

The API URL is below:
https://noggin.rea.gent/administrative-mackerel-6446?key=rg_v1_wcni1zfuldxtgl37s64xuu6uqc14ipa7z9az_ngk&product=
   
This API is called by adding some text at the end of 
the URL (right after '&product=').

Technically the text ought to be URI-component-encoded, 
though it'll mostly work either way:
   
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
Hint: this API returns text, not JSON, so if you're usign the `fetch` API, you'll need
to run `response.text()` on the result.

*/

function Description() {
  const [description, setDescription] = useState("");

  useEffect(() => {
    console.log("I run once when the component mounts!");
      try {
      // fetch data
      // parse response
      // final logic
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <div>{description}</div>;
}

export default Description;
