import React, { useState, useEffect } from "react";

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

/* Takes in an item name & calls the API to generate a description */
const url =
  "https://noggin.rea.gent/administrative-mackerel-6446?key=rg_v1_wcni1zfuldxtgl37s64xuu6uqc14ipa7z9az_ngk&product=";

function Description(props) {
  const { name } = props;
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDescription = async (name) => {
      try {
        let response = await fetch(url + encodeURIComponent(name));
        let data = await response.text();
        setDescription(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching description", error);
        setDescription("Error fetching description");
      }
    };
    fetchDescription(name);
  }, []);

  if (loading) {
    return <div style={{ padding: "10px" }}>Loading...</div>;
  }

  return <div style={{ padding: "10px" }}>{description}</div>;
}

export default Description;
