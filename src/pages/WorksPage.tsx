import { EmblaCarouselProject } from "../components/EmblaCarouselProject";
import gottiData from "../content/gottiData.json";
import { Project } from "../types";

export interface IWorksPageProps {
}

export function WorksPage(props: IWorksPageProps) {
  return (
    <div className='page vitePage'>
      <EmblaCarouselProject projects={gottiData.works as Project[]} />

    </div>
  );
}
