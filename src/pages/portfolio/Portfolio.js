import { useEffect, useState } from "react";
import "./Portfolio.scss";

const Portfolio = (props) => {

  const [selectedTab, setSelectedTab] = useState(null);

  useEffect(() => {
    if (props.tab != null) setSelectedTab(props.tab);
  }, []);

  return (
    <div></div>
  )
};

export default Portfolio;