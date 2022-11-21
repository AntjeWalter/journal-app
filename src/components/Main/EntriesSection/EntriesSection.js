import Entries from "../Entries/Entries";
import Tabs from "../Tabs/Tabs";
import "./EntriesSection.css";

export default function EntriesSection() {
  return (
    <section className="entries-section">
      <Tabs />
      <Entries
        date="Nov 18 2022"
        headline="Headline"
        notes="Lorem ipsum"
      ></Entries>
      <Entries
        date="Nov 19 2022"
        headline="Headline"
        notes="Lorem ipsum"
      ></Entries>
    </section>
  );
}
