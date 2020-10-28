import type { Review } from "./Review";
import type { Writable} from "svelte/store";
import { writable } from "svelte/store";

export const reviewStore: Writable<Array<Review>> = writable<Array<Review>>([
	{
		name: "Anna P.",
		rating: 4,
		date: "18. Oktober 2020",
		text: "Eine gute App, gerade Rechnungen einreichen funktioniert sehr gut. Allerdings könnte man den Service noch bisschen ausbauen und zum Beispiel Vertragsdokumente bereit halten, statt nur einer Übersicht. Das wäre manchmal wirklich hilfreich. Und beim einreichen von Rechnungen könnte \"weiteren Beleg hinzufügen\" gleich auf der aktuellen Ansicht stehen. Im Moment muss man immer wieder hinscrollen. Wichtig wäre allerdings, dass man seine Nachrichten in der App öffnen kann. Das geht momentan nicht.",
		answer: "Vielen Dank für ihr wertvolles Feedback! Wir arbeiten stetig daran unsere App zu verbessern, dabei helfen diese Vorschläge sehr! Ihr meine SIGNAL IDUNA Team"
	}, {
		name: "Gavin Henneberg",
		rating: 3,
		date: "24. Oktober 2020",
		text: "Obwohl ist das richtige PW zu meiner Benutzerkennung eingeben hatte, musste ich mich neu registrieren. Nachdem das erfolgreich war kam die Sicherheitscodeabfrage. Das zustellen per SMS hat ca. 10 Minuten gedauert. Für mich zu lang. Per Mail ging es innerhalb 1 Minute. Im Postfach konnte ich leider nicht alle ungelesenen Mails mit einem Klick auf gelesen setzen, sondern muss jede einzelne Mail öffnen. Das ist sehr unkomfortabel.",
		answer: "Hallo Herr Henneberg, vielen Dank für Ihre Bewertung! Auch wir sehen in weiteren Funktionen für das Postfach einen hohen Mehrwert und arbeiten daher mit Hochdruck daran. Wir hoffen, dass die weiteren geplanten Funktionen Sie überzeugen werden. Ihr meine SIGNAL IDUNA Team"
	}, {
		name: "Dimi Murik",
		rating: 4,
		date: "24. Oktober 2020",
		text: "Stabil, zuverlässiges Fotografieren und Erkennen. Gute Übersicht.. Einzige Unannehmlichkeit: nach dem Zusammenfassen der Rechnung wird man ausgeloggt. Warum, wozu? Wie dient es der Sicherheit? Am Ende führt es dazu, dass kein automatischer Unterlagen-Versand stattfindet. Nach dem zweiten Login muss man auf die gerade zusammengefasste Unterlagen/Belege klicken und sie manuell versenden - zu viele unnötige Aktionen seitens des Benutzers! Meine Vermutung: die Entwickler haben die Gültigkeitsdauer der Login-Session auf eine zu kurze Zeit gesetzt. Sie ist dautlich kürzer, als die Dauer des Belege-Fotografierens. Deswegen klappt der Versand zuerst nicht, weil dies eine Interaktion mit dem Server ist, für den die Login-Session schon längst abgelaufen ist. Deswegen zweites Login und Notwendigkeit die Belege manuell zu versenden. Es ist eine schlechte Design-Entscheidung.",
		answer: "Hallo Herr Murik, vielen Dank für Ihre tolle Bewertung! Es freut uns, dass die App bei Ihnen so zuverlässig funktioniert. Sollte der Loggout-Fehler weiterhin bei Ihnen auftauchen, würden wir uns freuen, wenn Sie uns eine E-Mail an app.meinesi@signal-iduna.de schicken, damit wir Sie bestmöglich unterstützen können. Ihr meine SIGNAL IDUNA Team"
	}
]);
