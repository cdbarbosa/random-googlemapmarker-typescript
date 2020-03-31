import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const user = new User();
const company = new Company();

const customap = new CustomMap("map");

customap.addMarker(user);
customap.addMarker(company);
