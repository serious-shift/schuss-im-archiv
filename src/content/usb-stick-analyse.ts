import { Chapter } from "@/src/types";

export const USBStickAnalyseChapter: Chapter = {
  id: "usb-stick-analyse",
  title: "USB-Stick Analyse",
  scenes: [
    {
      id: "scene-5-a-a-a",
      title: "USB-Stick analysieren lassen",
      layout: "default",
      content: [
        {
          type: "narrative",
          text: [
            "Der Stick wird isoliert und gesichert geöffnet. Keine Autostart-Funktion, keine Verschlüsselung.",
            "Nur ein einzelner Ordner mit dem Titel: Backup_Koenig. Darin enthalten:",
            "- 1x Audiodatei: msg_koenig_final.wav",
            "- 2x Bearbeitungsdateien: .vproj & .cloneprofile",
            "- 1x Software-Installer: VoiceClone_Studio_Setup_5.2.exe",
            "- 1x Exportlog.txt",
            "Was hat es mit diesen Dateien auf sich? Worum geht es hier überhaupt?"
          ]
        },
        {
          type: "navigation",
          buttonText: "Weiter",
          targetChapterId: "usb-stick-analyse-a"
        }
      ]
    }
  ]
}