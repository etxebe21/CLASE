import Mage from "./Mage.js";
import { Spell } from "./Spell.js";
import {combat, showAttr} from "./combat.js";

const spell = new Spell("lightning", 24, 12);
const mago1 = new Mage("Pedrito", 23, 234, 45, 12, spell);

const spell2 = new Spell("fire ball", 24, 12);
const mago2 = new Mage("Manolito", 23, 234, 45, 12, spell2);

showAttr(mago1);
showAttr(mago2);
combat(mago1, mago2);
showAttr(mago1);
showAttr(mago2);


