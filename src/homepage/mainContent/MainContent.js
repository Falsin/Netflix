import Cover from "./blocks/Cover";
import WatchBlock from "./blocks/WatchBlock";
import EnjoyBlock from "./blocks/EnjoyBlock";
import DownloadBlock from "./blocks/DownloadBlock";
import KidsBlock from "./blocks/KidsBlock";

export default function MainContent() {
  return (
    <div>
      <Cover />
      <EnjoyBlock />
      <DownloadBlock />
      <WatchBlock />
      <KidsBlock />
    </div>
  )
}