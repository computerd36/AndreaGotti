import { EmblaCarouselProject } from "../components/EmblaCarouselProject";
import worksData from "../content/works.json";
import { Project } from "../types";


export function WorksPage() {
  return (
    <div className='page vitePage'>
      <EmblaCarouselProject projects={worksData.works as Project[]} />
    </div>
  );
}
