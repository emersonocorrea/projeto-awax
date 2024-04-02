import { textlist, services, projects } from "./data.js";
import { renderList, renderProjects, renderServices } from "./render.js";

renderList(textlist)
renderServices(services)
renderProjects(projects)

