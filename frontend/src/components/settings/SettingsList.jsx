import "./SettingsList.css";

import ThemeCard from "./ThemeCard";
import FeedbackForm from "./FeedbackForm";
import AboutCard from "./AboutCard";

function SettingsList() {
  return (
    <section className="settings-list">

      <ThemeCard />

      <FeedbackForm />

      <AboutCard />

    </section>
  );
}

export default SettingsList;