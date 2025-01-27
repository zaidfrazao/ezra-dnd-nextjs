import { MDXRemote } from "next-mdx-remote/rsc";

import Header from "./header";
import { fetchWikiDetails } from "./actions";

const getFormattedSlug = (slugArray) => {
  let formattedSlug = "";
  slugArray.forEach((value) => (formattedSlug = `${formattedSlug}/${value}`));
  return formattedSlug;
};

export default async function WikiPage({ params }) {
  const slug = (await params).slug;
  const pageData = await fetchWikiDetails(getFormattedSlug(slug));

  return (
    <div>
      <Header title={pageData.title} id={pageData.id} />
      <MDXRemote source={pageData.contents} />
    </div>
  );
}
