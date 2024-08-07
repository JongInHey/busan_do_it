import { Helmet } from "react-helmet-async";

export const PageTitle = ({ titleName }) => {
  return (
    <Helmet>
      <title>Busan_Do_It | {titleName}</title>
    </Helmet>
  );
};
