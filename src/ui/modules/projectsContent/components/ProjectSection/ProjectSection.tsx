import { PROJECTS_SECT } from '@/src/ui/constants/mainconstants';
import { ProjectsMap } from './ProjectsMap';

export const ProjectSection = () => (
    <div className="padding-M">
        <div className="pb-16 md:pb-32 lg:pb-48">
            <h2 className="h2-M">{PROJECTS_SECT}</h2>
        </div>
        <ProjectsMap />
    </div>
);

