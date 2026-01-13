import { Chapter } from "@/src/types";
import { einfuehrungChapter } from './einfuehrung';
import { entscheidungChapter } from "./entscheidung";
import { verhoerRalfKoenigChapter } from "./verhoer-ralf-koenig";
import { verhoerLenaBergmannChapter } from "./verhoer-lena-bergmann";
import { verhoerPetraHaasChapter } from "./verhoer-petra-haas";
import { veroeffentlichungenDurchleuchtenChapter } from "./veroeffentlichungen-durchleuchten";
import { tiefereAnalyseVeroeffentlichungenChapter } from "./tiefere-analyse-veroeffentlichungen";
import { tonspurPruefenChapter } from "./tonspur-pruefen";
import { tonspurErgebnisseChapter } from "./tonspur-ergebnisse";
import { befragungLenaBergmannChapter } from "./befragung-lena-bergmann";
import { usbStickVerlustChapter } from "./usb-stick-verlust";
import { spurensicherungAdminStationChapter } from "./spurensicherung-admin-station";
import { befragungPetraHaasChapter } from "./befragung-petra-haas";
import { zettelPruefenChapter } from "./zettel-pruefen";
import { lenasAnliegenChapter } from "./lenas-anliegen";
import { untersuchungDerArchivzugaengeChapter } from "./untersuchung-der-archivzugaenge";
import { archivzugangEntscheidungChapter } from "./archivzugang-entscheidung"; 
import { untersuchungBueroHaasChapter } from "./untersuchung-buero-haas";
import { erneuteUntersuchungDerArchivzugaengeChapter } from "./erneute-untersuchung-der-archivzugaenge";

export const chapters: Chapter[] = [
  einfuehrungChapter,
  entscheidungChapter,
  verhoerRalfKoenigChapter,
  verhoerLenaBergmannChapter,
  verhoerPetraHaasChapter,
  veroeffentlichungenDurchleuchtenChapter,    
  tiefereAnalyseVeroeffentlichungenChapter,
  tonspurPruefenChapter,
  tonspurErgebnisseChapter,
  befragungLenaBergmannChapter,
  usbStickVerlustChapter,
  spurensicherungAdminStationChapter,
  befragungPetraHaasChapter,
  zettelPruefenChapter,
  lenasAnliegenChapter,
  untersuchungDerArchivzugaengeChapter,
  archivzugangEntscheidungChapter,
  untersuchungBueroHaasChapter,
  erneuteUntersuchungDerArchivzugaengeChapter,
];