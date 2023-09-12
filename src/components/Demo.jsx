import React, { useState } from "react";
import { linkIcon } from "../assets";

function Demo() {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const handleSubmit = () => {
    alert("submitted!");
  };

  return (
    <section className="mt-16 w-full max-w-xl ">
      {/* Search */}
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="url"
            placeholder="Enter a url"
            value={article.url}
            required
            className="url_input peer"
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            <p>↵</p>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Demo;
