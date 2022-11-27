import Entries from "../Entries/Entries";
import Tabs from "../Tabs/Tabs";
import Tab from "../Tab/Tab";
import Divider from "../Divider/Divider";
import Badge from "../Badge/Badge";
import "./EntriesSection.css";
import { Fragment } from "react";

export default function EntriesSection({
  entries,
  onToggleFavorite,
  onShowAllEntries,
  onShowFavoriteEntries,
  filter,
  allEntriesCount,
  favoriteEntriesCount,
}) {
  return (
    <section className="entries-section">
      <Tabs>
        <Tab
          isActive={filter === "all" ? true : false}
          onClick={onShowAllEntries}
        >
          All Entries{" "}
          <Badge isActive={filter === "all"}>{allEntriesCount}</Badge>
        </Tab>
        <Tab
          isActive={filter === "favorites" ? true : false}
          onClick={onShowFavoriteEntries}
        >
          Favorites{" "}
          <Badge isActive={filter === "favorite"}>{favoriteEntriesCount}</Badge>
        </Tab>
      </Tabs>
      <div className="entry-section__entries">
        {entries.map((entry, index) => {
          return (
            <Fragment key={entry.id}>
              <Entries
                key={entry.id}
                date={entry.date}
                headline={entry.motto}
                notes={entry.notes}
                id={entry.id}
                isFavorite={entry.isFavorite}
                onToggleFavorite={onToggleFavorite}
              />
              {index === entries.length - 1 ? "" : <Divider />}
            </Fragment>
          );
        })}
      </div>
    </section>
  );
}
