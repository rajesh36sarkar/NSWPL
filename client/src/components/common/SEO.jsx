import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords = "stationery, notebooks, registers, netai stationery" }) => {
  return (
    <Helmet>
      <title>{title} | Netai Stationery Works Pvt. Ltd.</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default SEO;