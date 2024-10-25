const questionsData = [
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Pharao ließ die Pyramiden von Gizeh erbauen?",
        "Antwort": "Cheops",
        "Tipp": "Sein Name ist mit der größten der Pyramiden verbunden.",
        "Optionen": "Cheops;Tutanchamun;Ramses II.;Echnaton",
        "Punkte": 100
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Land war das erste, das Demokratie in großem Umfang einführte?",
        "Antwort": "Griechenland",
        "Tipp": "Dieses Land ist bekannt für seine antike Philosophie und die Olympischen Spiele.",
        "Optionen": "Griechenland;Rom;Ägypten;Persien",
        "Punkte": 100
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer führte die berühmte 'Salzstreik'-Kampagne gegen die britische Kolonialherrschaft?",
        "Antwort": "Mahatma Gandhi",
        "Tipp": "Er ist bekannt als der Vater der indischen Unabhängigkeitsbewegung.",
        "Optionen": "Mahatma Gandhi;Jawaharlal Nehru;Subhas Chandra Bose;Bhagat Singh",
        "Punkte": 100
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher englische König war für die Trennung der Kirche von England von der katholischen Kirche verantwortlich?",
        "Antwort": "Heinrich VIII.",
        "Tipp": "Er ist auch für seine vielen Ehen bekannt.",
        "Optionen": "Heinrich VIII.;Karl I.;Eduard VI.;Georg III.",
        "Punkte": 200
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Ereignis löste den Kalten Krieg zwischen den USA und der Sowjetunion aus?",
        "Antwort": "Die Berliner Blockade",
        "Tipp": "Es war der erste große Konflikt nach dem Zweiten Weltkrieg, der eine Stadt betraf, die später geteilt wurde.",
        "Optionen": "Die Berliner Blockade;Die Kubakrise;Der Koreakrieg;Der Vietnamkrieg",
        "Punkte": 200
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher spanische Eroberer besiegte das Aztekenreich und eroberte Mexiko?",
        "Antwort": "Hernán Cortés",
        "Tipp": "Er führte nur eine kleine Truppe, nutzte aber die internen Konflikte im Aztekenreich.",
        "Optionen": "Hernán Cortés;Francisco Pizarro;Pedro de Alvarado;Vasco Núñez de Balboa",
        "Punkte": 200
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer gründete das Römische Reich und war sein erster Kaiser?",
        "Antwort": "Augustus",
        "Tipp": "Er war der Adoptivsohn von Julius Caesar und beendete die Römische Republik.",
        "Optionen": "Augustus;Julius Caesar;Tiberius;Nero",
        "Punkte": 300
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Revolution führte zur Entstehung der Sowjetunion?",
        "Antwort": "Die Russische Revolution",
        "Tipp": "Diese Revolution begann mit dem Sturz des Zaren und endete mit der Machtübernahme der Bolschewiki.",
        "Optionen": "Die Russische Revolution;Die Französische Revolution;Die Chinesische Revolution;Die Mexikanische Revolution",
        "Punkte": 300
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche historische Figur war als 'Maid von Orléans' bekannt und spielte eine Schlüsselrolle im Hundertjährigen Krieg?",
        "Antwort": "Jeanne d'Arc",
        "Tipp": "Sie war eine französische Nationalheldin, die für ihre Visionen bekannt war.",
        "Optionen": "Jeanne d'Arc;Katharina von Aragon;Isabella von Kastilien;Eleanor von Aquitanien",
        "Punkte": 300
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer führte die Unabhängigkeitsbewegung in Südamerika gegen die spanische Kolonialherrschaft an?",
        "Antwort": "Simón Bolívar",
        "Tipp": "Er wird oft als der 'Befreier' bezeichnet und spielte eine Schlüsselrolle in mehreren südamerikanischen Ländern.",
        "Optionen": "Simón Bolívar;José de San Martín;Bernardo O'Higgins;Francisco de Miranda",
        "Punkte": 400
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Vertrag beendete offiziell den Ersten Weltkrieg?",
        "Antwort": "Vertrag von Versailles",
        "Tipp": "Dieser Vertrag legte die Bedingungen für Deutschland fest und führte später zu großer Unzufriedenheit.",
        "Optionen": "Vertrag von Versailles;Vertrag von Trianon;Vertrag von St. Germain;Vertrag von Sevres",
        "Punkte": 400
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Wer war der letzte Monarch, der auf dem britischen Thron abgesetzt wurde?",
        "Antwort": "James II.",
        "Tipp": "Er wurde während der Glorious Revolution abgesetzt.",
        "Optionen": "James II.;Charles I.;Edward VIII.;Richard III.",
        "Punkte": 400
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Land wurde durch den Westfälischen Frieden 1648 offiziell unabhängig?",
        "Antwort": "Die Niederlande",
        "Tipp": "Es ist bekannt für seine Tulpen und Windmühlen.",
        "Optionen": "Die Niederlande;Belgien;Schweiz;Portugal",
        "Punkte": 100
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Konflikt führte zur Teilung Koreas in zwei Staaten?",
        "Antwort": "Der Koreakrieg",
        "Tipp": "Dieser Konflikt dauerte von 1950 bis 1953 und endete in einer Pattsituation.",
        "Optionen": "Der Koreakrieg;Der Vietnamkrieg;Der Kalte Krieg;Der Chinesische Bürgerkrieg",
        "Punkte": 200
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Seeschlacht markierte den Beginn des britischen Aufstiegs zur Seemacht?",
        "Antwort": "Die Schlacht von Trafalgar",
        "Tipp": "Diese Schlacht fand 1805 vor der Küste Spaniens statt.",
        "Optionen": "Die Schlacht von Trafalgar;Die Schlacht von Lepanto;Die Schlacht von Salamis;Die Schlacht von Midway",
        "Punkte": 300
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Ereignis führte zur Aufteilung Afrikas unter den europäischen Kolonialmächten?",
        "Antwort": "Die Berliner Konferenz",
        "Tipp": "Diese Konferenz fand 1884-1885 in der Hauptstadt Deutschlands statt.",
        "Optionen": "Die Berliner Konferenz;Der Wiener Kongress;Die Pariser Friedenskonferenz;Der Versailler Vertrag",
        "Punkte": 400
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Abkommen beendete den Konflikt zwischen England und Frankreich im Hundertjährigen Krieg?",
        "Antwort": "Der Vertrag von Picquigny",
        "Tipp": "Dieser Vertrag wurde 1475 unterzeichnet.",
        "Optionen": "Der Vertrag von Picquigny;Der Vertrag von Troyes;Der Vertrag von Verdun;Der Vertrag von Utrecht",
        "Punkte": 100
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Ereignis gilt als Auslöser der industriellen Revolution?",
        "Antwort": "Die Erfindung der Dampfmaschine",
        "Tipp": "Diese technische Entwicklung ermöglichte die maschinelle Produktion und führte zu erheblichen gesellschaftlichen Veränderungen.",
        "Optionen": "Die Erfindung der Dampfmaschine;Die Einführung der Baumwollspinnerei;Die Erfindung des Webstuhls;Die Entwicklung der Eisenbahn",
        "Punkte": 100
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Reformation führte zur Spaltung der katholischen Kirche in Europa?",
        "Antwort": "Die protestantische Reformation",
        "Tipp": "Diese Bewegung wurde von Martin Luther initiiert und führte zur Gründung zahlreicher protestantischer Kirchen.",
        "Optionen": "Die protestantische Reformation;Die englische Reformation;Die Gegenreformation;Die Calvinistische Reformation",
        "Punkte": 100
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Revolution beendete die Herrschaft der Monarchie in Frankreich und führte zur Errichtung der Ersten Republik?",
        "Antwort": "Die Französische Revolution",
        "Tipp": "Diese Revolution begann 1789 und führte zu einer radikalen Umgestaltung der französischen Gesellschaft.",
        "Optionen": "Die Französische Revolution;Die Russische Revolution;Die Glorious Revolution;Die Amerikanische Revolution",
        "Punkte": 200
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Ereignis markierte das Ende des Mittelalters in Europa?",
        "Antwort": "Der Fall von Konstantinopel",
        "Tipp": "Dieses Ereignis fand 1453 statt und führte zum Aufstieg des Osmanischen Reiches.",
        "Optionen": "Der Fall von Konstantinopel;Die Entdeckung Amerikas;Die Reformation;Die Erfindung des Buchdrucks",
        "Punkte": 200
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Ereignis führte zum Ende des Heiligen Römischen Reiches?",
        "Antwort": "Die Abdankung von Kaiser Franz II.",
        "Tipp": "Dieses Ereignis fand im Jahr 1806 statt, als Napoleon Europa dominierte.",
        "Optionen": "Die Abdankung von Kaiser Franz II.;Die Schlacht von Austerlitz;Der Wiener Kongress;Die Gründung des Deutschen Bundes",
        "Punkte": 200
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Abkommen beendete den Krieg zwischen Ägypten und Israel und führte zum Friedensprozess im Nahen Osten?",
        "Antwort": "Das Camp-David-Abkommen",
        "Tipp": "Dieses Abkommen wurde 1978 zwischen Anwar Sadat und Menachem Begin unterzeichnet.",
        "Optionen": "Das Camp-David-Abkommen;Das Oslo-Abkommen;Das Friedensabkommen von Washington;Das Taba-Abkommen",
        "Punkte": 300
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Ereignis führte zur Gründung der Vereinten Nationen?",
        "Antwort": "Das Ende des Zweiten Weltkriegs",
        "Tipp": "Diese Organisation wurde 1945 gegründet, um den Weltfrieden zu sichern und internationale Zusammenarbeit zu fördern.",
        "Optionen": "Das Ende des Zweiten Weltkriegs;Der Versailler Vertrag;Die Gründung der NATO;Die Pariser Friedenskonferenz",
        "Punkte": 300
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches Bauwerk wurde 1989 in Deutschland nach über 28 Jahren der Teilung niedergerissen?",
        "Antwort": "Die Berliner Mauer",
        "Tipp": "Dieses Bauwerk trennte Ost- und Westdeutschland.",
        "Optionen": "Die Berliner Mauer;Die Chinesische Mauer;Die Mauer von Jericho;Die Hadriansmauer",
        "Punkte": 300
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Jahr wurde die Deutsche Einheit offiziell vollzogen?",
        "Antwort": "1990",
        "Tipp": "Es war im Oktober, knapp ein Jahr nach dem Mauerfall.",
        "Optionen": "1989;1990;1991;1992",
        "Punkte": 400
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Tag wird als Tag der Deutschen Einheit gefeiert?",
        "Antwort": "3. Oktober",
        "Tipp": "Dieser Tag markiert den Beitritt der DDR zur BRD.",
        "Optionen": "3. Oktober;9. November;1. Mai;17. Juni",
        "Punkte": 400
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Nach welchem französischen Kaiser ist das Rechtskodex benannt, der in ganz Europa eingeführt wurde?",
        "Antwort": "Napoleon Bonaparte",
        "Tipp": "Dieser Kaiser herrschte Anfang des 19. Jahrhunderts und führte zahlreiche Reformen durch.",
        "Optionen": "Napoleon Bonaparte;Ludwig XIV.;Karl der Große;Franz I.",
        "Punkte": 400
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Revolution führte 1789 zur Abschaffung der Monarchie und Errichtung der Ersten Republik in Frankreich?",
        "Antwort": "Französische Revolution",
        "Tipp": "Diese Revolution begann mit dem Sturm auf die Bastille.",
        "Optionen": "Französische Revolution;Amerikanische Revolution;Russische Revolution;Glorious Revolution",
        "Punkte": 100
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Jahr endete der Zweite Weltkrieg in Europa?",
        "Antwort": "1945",
        "Tipp": "Dieses Jahr markierte das Ende des größten globalen Konflikts des 20. Jahrhunderts.",
        "Optionen": "1943;1944;1945;1946",
        "Punkte": 200
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Vertrag wurde 1957 unterzeichnet und legte den Grundstein für die Europäische Wirtschaftsgemeinschaft (EWG)?",
        "Antwort": "Römische Verträge",
        "Tipp": "Diese Verträge wurden in der Hauptstadt Italiens unterzeichnet.",
        "Optionen": "Römische Verträge;Maastrichter Vertrag;Vertrag von Lissabon;Schengener Abkommen",
        "Punkte": 300
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welche Weltmacht setzte 1969 den ersten Menschen auf den Mond?",
        "Antwort": "USA",
        "Tipp": "Diese Mission trug den Namen Apollo 11.",
        "Optionen": "USA;Sowjetunion;China;Indien",
        "Punkte": 400
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welches berühmte Schlachtfeld in Belgien wurde 1815 zum Schauplatz von Napoleons endgültiger Niederlage?",
        "Antwort": "Waterloo",
        "Tipp": "Diese Schlacht beendete die Herrschaft der Hundert Tage.",
        "Optionen": "Waterloo;Leipzig;Austerlitz;Trafalgar",
        "Punkte": 100
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "In welchem Jahr erfolgte die Reichsgründung, die zur Entstehung des Deutschen Kaiserreichs führte?",
        "Antwort": "1871",
        "Tipp": "Dieses Ereignis fand im Spiegelsaal von Versailles statt.",
        "Optionen": "1866;1871;1875;1881",
        "Punkte": 200
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Nach welchem berühmten Seefahrer, der die Südspitze Afrikas umrundete, ist die 'Straße von Magellan' benannt?",
        "Antwort": "Ferdinand Magellan",
        "Tipp": "Er war ein portugiesischer Entdecker, der als erster Mensch eine Weltumsegelung leitete.",
        "Optionen": "Ferdinand Magellan;Vasco da Gama;Bartolomeu Dias;James Cook",
        "Punkte": 300
    },
    {
        "Kategorie": "Geschichte",
        "Frage": "Welcher Vertrag, der nach dem Ersten Weltkrieg unterzeichnet wurde, führte zur Schaffung des Völkerbunds?",
        "Antwort": "Versailler Vertrag",
        "Tipp": "Dieser Vertrag legte auch die Bedingungen für Deutschland nach dem Krieg fest.",
        "Optionen": "Versailler Vertrag;Vertrag von Trianon;Vertrag von Sèvres;Vertrag von Saint-Germain",
        "Punkte": 400
    },
    {
        "Kategorie": "Geografie",
        "Frage": "Welches ist das größte Land der Welt nach Fläche?",
        "Antwort": "Russland",
        "Tipp": "Dieses Land erstreckt sich über Europa und Asien.",
        "Optionen": "Russland;Kanada;China;USA",
        "Punkte": 100
    },
    {
        "Kategorie": "Geografie",
        "Frage": "Welcher Fluss fließt durch die Stadt Kairo?",
        "Antwort": "Nil",
        "Tipp": "Dieser Fluss ist der längste in Afrika.",
        "Optionen": "Nil;Amazonas;Donau;Mississippi",
        "Punkte": 100
    },
    {
        "Kategorie": "Geografie",
        "Frage": "Welcher Kontinent ist der bevölkerungsreichste?",
        "Antwort": "Asien",
        "Tipp": "Dieser Kontinent umfasst Länder wie China und Indien.",
        "Optionen": "Asien;Afrika;Europa;Nordamerika",
        "Punkte": 100
    },
    {
        "Kategorie": "Geografie",
        "Frage": "In welchem Land liegt der Mount Everest?",
        "Antwort": "Nepal",
        "Tipp": "Dieses Land liegt zwischen China und Indien.",
        "Optionen": "Nepal;China;Indien;Bhutan",
        "Punkte": 200
    },
    {
        "Kategorie": "Geografie",
        "Frage": "Welches Land hat die längste Küstenlinie der Welt?",
        "Antwort": "Kanada",
        "Tipp": "Dieses Land liegt in Nordamerika und hat viele Seen.",
        "Optionen": "Kanada;Australien;Indonesien;Russland",
        "Punkte": 200
    },
    {
        "Kategorie": "Geografie",
        "Frage": "Welches berühmte Riff liegt vor der Küste Australiens?",
        "Antwort": "Great Barrier Reef",
        "Tipp": "Dieses Riff ist das größte Korallenriff der Welt.",
        "Optionen": "Great Barrier Reef;Belize Barrier Reef;Andros Barrier Reef;Ningaloo Reef",
        "Punkte": 200
    },
    {
        "Kategorie": "Geografie",
        "Frage": "Welche Wüste ist die größte Sandwüste der Welt?",
        "Antwort": "Sahara",
        "Tipp": "Diese Wüste erstreckt sich über den größten Teil Nordafrikas.",
        "Optionen": "Sahara;Gobi;Kalahari;Arabische Wüste",
        "Punkte": 300
    },
    {
        "Kategorie": "Geografie",
        "Frage": "Welcher See ist der tiefste der Welt?",
        "Antwort": "Baikalsee",
        "Tipp": "Dieser See befindet sich in Sibirien.",
        "Optionen": "Baikalsee;Tanganjikasee;Kaspisches Meer;Viktoriasee",
        "Punkte": 300
    },
    {
        "Kategorie": "Geografie",
        "Frage": "Welcher Vulkan gilt als der höchste aktive Vulkan der Welt?",
        "Antwort": "Ojos del Salado",
        "Tipp": "Dieser Vulkan liegt in den Anden an der Grenze zwischen Chile und Argentinien.",
        "Optionen": "Ojos del Salado;Mount Etna;Mount Fuji;Kilimandscharo",
        "Punkte": 300
    },
    {
        "Kategorie": "Geografie",
        "Frage": "Welches Gebirge bildet die Grenze zwischen Europa und Asien?",
        "Antwort": "Uralgebirge",
        "Tipp": "Dieses Gebirge verläuft durch Russland.",
        "Optionen": "Uralgebirge;Alpen;Kaukasus;Himalaya",
        "Punkte": 400
    },
    {
        "Kategorie": "Geografie",
        "Frage": "Welche Meerenge trennt Spanien und Marokko?",
        "Antwort": "Straße von Gibraltar",
        "Tipp": "Diese Meerenge verbindet das Mittelmeer mit dem Atlantischen Ozean.",
        "Optionen": "Straße von Gibraltar;Bosporus;Dardanellen;Beringstraße",
        "Punkte": 400
    },
    {
        "Kategorie": "Geografie",
        "Frage": "Welcher Fluss bildet die Grenze zwischen den USA und Mexiko?",
        "Antwort": "Rio Grande",
        "Tipp": "Dieser Fluss ist einer der längsten Flüsse Nordamerikas.",
        "Optionen": "Rio Grande;Colorado River;Missouri;Yukon",
        "Punkte": 400
    },
    {
        "Kategorie": "Geografie",
        "Frage": "Welche Inselgruppe liegt östlich von Ecuador und ist für ihre einzigartige Tierwelt bekannt?",
        "Antwort": "Galápagos-Inseln",
        "Tipp": "Charles Darwin entwickelte hier seine Evolutionstheorie.",
        "Optionen": "Galápagos-Inseln;Seychellen;Malediven;Hawaii",
        "Punkte": 100
    },
    {
        "Kategorie": "Geografie",
        "Frage": "Welche Stadt wird von zwei Kontinenten geteilt und liegt sowohl in Europa als auch in Asien?",
        "Antwort": "Istanbul",
        "Tipp": "Diese Stadt war früher als Konstantinopel bekannt.",
        "Optionen": "Istanbul;Moskau;Kairo;Athen",
        "Punkte": 200
    },
    {
        "Kategorie": "Geografie",
        "Frage": "In welchem Land befinden sich die Victoriafälle, eines der größten Wasserfälle der Welt?",
        "Antwort": "Simbabwe",
        "Tipp": "Dieses Land liegt im südlichen Afrika und teilt die Fälle mit Sambia.",
        "Optionen": "Simbabwe;Sambia;Südafrika;Botswana",
        "Punkte": 300
    },
    {
        "Kategorie": "Geografie",
        "Frage": "Welches Meer liegt zwischen Italien und der Balkanhalbinsel?",
        "Antwort": "Adriatisches Meer",
        "Tipp": "Dieses Meer ist ein Nebenmeer des Mittelmeers.",
        "Optionen": "Adriatisches Meer;Ionisches Meer;Ägäisches Meer;Tyrrhenisches Meer",
        "Punkte": 400
    },
    {
        "Kategorie": "Geografie",
        "Frage": "Welcher See in Nordamerika ist der größte Süßwassersee nach Fläche?",
        "Antwort": "Oberer See",
        "Tipp": "Dieser See ist einer der Großen Seen und grenzt an die USA und Kanada.",
        "Optionen": "Oberer See;Michigansee;Eriesee;Ontariosee",
        "Punkte": 100
    },
    {
        "Kategorie": "Geografie",
        "Frage": "Welche Stadt ist die Hauptstadt von Italien?",
        "Antwort": "Rom",
        "Tipp": "Diese Stadt ist bekannt für das Kolosseum und den Vatikan.",
        "Optionen": "Rom;Mailand;Florenz;Neapel",
        "Punkte": 100
    },
    {
        "Kategorie": "Geografie",
        "Frage": "In welchem Land liegt die berühmte Wüste Gobi?",
        "Antwort": "Mongolei",
        "Tipp": "Diese Wüste erstreckt sich über China und dieses Land.",
        "Optionen": "Mongolei;China;Kasachstan;Indien",
        "Punkte": 100
    },
    {
        "Kategorie": "Geografie",
        "Frage": "Welches Meer liegt zwischen Europa und Afrika?",
        "Antwort": "Mittelmeer",
        "Tipp": "Dieses Meer ist bekannt für seine schönen Küstenstädte und Inseln.",
        "Optionen": "Mittelmeer;Schwarzes Meer;Rotes Meer;Ostsee",
        "Punkte": 200
    },
    {
        "Kategorie": "Geografie",
        "Frage": "Welche Stadt wird als 'Stadt der Liebe' bezeichnet?",
        "Antwort": "Paris",
        "Tipp": "Diese Stadt ist auch als Hauptstadt Frankreichs bekannt.",
        "Optionen": "Paris;Venedig;Barcelona;Rom",
        "Punkte": 200
    },
    {
        "Kategorie": "Geografie",
        "Frage": "Welche Insel gehört politisch zu Italien, ist aber geografisch Teil Afrikas?",
        "Antwort": "Lampedusa",
        "Tipp": "Diese Insel liegt näher an Tunesien als an Italien.",
        "Optionen": "Lampedusa;Sardinien;Sizilien;Elba",
        "Punkte": 200
    },
    {
        "Kategorie": "Geografie",
        "Frage": "Welcher Berg ist der höchste Gipfel in Afrika?",
        "Antwort": "Kilimandscharo",
        "Tipp": "Dieser Berg liegt in Tansania und ist ein beliebtes Ziel für Bergsteiger.",
        "Optionen": "Kilimandscharo;Mount Kenya;Atlasgebirge;Ruwenzori",
        "Punkte": 300
    },
    {
        "Kategorie": "Geografie",
        "Frage": "In welchem Land befindet sich die Atacama-Wüste, eine der trockensten Regionen der Welt?",
        "Antwort": "Chile",
        "Tipp": "Dieses Land liegt an der Westküste Südamerikas.",
        "Optionen": "Chile;Peru;Bolivien;Argentinien",
        "Punkte": 300
    },
    {
        "Kategorie": "Geografie",
        "Frage": "Welche Stadt ist die Hauptstadt von Australien?",
        "Antwort": "Canberra",
        "Tipp": "Diese Stadt wurde speziell als Hauptstadt erbaut und liegt nicht an der Küste.",
        "Optionen": "Canberra;Sydney;Melbourne;Brisbane",
        "Punkte": 300
    },
    {
        "Kategorie": "Geografie",
        "Frage": "Welcher See ist der größte See in Afrika?",
        "Antwort": "Viktoriasee",
        "Tipp": "Dieser See liegt in Ostafrika und ist nach einer britischen Königin benannt.",
        "Optionen": "Viktoriasee;Malawisee;Tanganjikasee;Tschadsee",
        "Punkte": 400
    },
    {
        "Kategorie": "Geografie",
        "Frage": "Welches Gebirge erstreckt sich über die Grenzen von China, Pakistan und Indien?",
        "Antwort": "Karakorum",
        "Tipp": "Dieses Gebirge beheimatet den zweithöchsten Gipfel der Welt, den K2.",
        "Optionen": "Karakorum;Himalaya;Tian Shan;Kunlun",
        "Punkte": 400
    },
    {
        "Kategorie": "Geografie",
        "Frage": "Welcher Golf ist das größte Ölproduktionsgebiet der Welt?",
        "Antwort": "Persischer Golf",
        "Tipp": "Dieser Golf liegt zwischen dem Iran und der Arabischen Halbinsel.",
        "Optionen": "Persischer Golf;Golf von Mexiko;Golf von Oman;Golf von Guinea",
        "Punkte": 400
    },
    {
        "Kategorie": "Geografie",
        "Frage": "Welches Land ist das einzige, das sich über zwei Kontinente erstreckt?",
        "Antwort": "Türkei",
        "Tipp": "Dieses Land liegt teilweise in Europa und teilweise in Asien.",
        "Optionen": "Türkei;Russland;Ägypten;Kasachstan",
        "Punkte": 100
    },
    {
        "Kategorie": "Geografie",
        "Frage": "Welche Hauptstadt liegt am Tiber?",
        "Antwort": "Rom",
        "Tipp": "Diese Stadt ist auch die Hauptstadt Italiens.",
        "Optionen": "Rom;Madrid;Lissabon;Athen",
        "Punkte": 200
    },
    {
        "Kategorie": "Geografie",
        "Frage": "Welches Land ist bekannt als das Land der tausend Seen?",
        "Antwort": "Finnland",
        "Tipp": "Dieses Land liegt in Nordeuropa und ist Teil der Nordischen Länder.",
        "Optionen": "Finnland;Schweden;Norwegen;Dänemark",
        "Punkte": 300
    },
    {
        "Kategorie": "Geografie",
        "Frage": "Welcher Fluss fließt durch London?",
        "Antwort": "Themse",
        "Tipp": "Dieser Fluss ist der zweitlängste Fluss im Vereinigten Königreich.",
        "Optionen": "Themse;Severn;Mersey;Trent",
        "Punkte": 400
    },
    {
        "Kategorie": "Geografie",
        "Frage": "In welchem Ozean liegen die Malediven?",
        "Antwort": "Indischer Ozean",
        "Tipp": "Dieser Ozean grenzt an Afrika, Asien und Australien.",
        "Optionen": "Indischer Ozean;Pazifischer Ozean;Atlantischer Ozean;Arktischer Ozean",
        "Punkte": 100
    },
    {
        "Kategorie": "Geografie",
        "Frage": "Welche zwei Länder teilen sich die Insel Borneo?",
        "Antwort": "Malaysia und Indonesien",
        "Tipp": "Diese Insel liegt im Südchinesischen Meer und ist die drittgrößte Insel der Welt.",
        "Optionen": "Malaysia und Indonesien;Indonesien und Philippinen;Malaysia und Thailand;Vietnam und Kambodscha",
        "Punkte": 300
    },
    {
        "Kategorie": "Geografie",
        "Frage": "Welches Land hat die höchste Dichte an Vulkanen?",
        "Antwort": "Indonesien",
        "Tipp": "Dieses Land liegt im Pazifischen Feuerring und umfasst über 17.000 Inseln.",
        "Optionen": "Indonesien;Japan;Island;Chile",
        "Punkte": 200
    },
    {
        "Kategorie": "Wissenschaft und Technik",
        "Frage": "Welcher Planet ist der größte in unserem Sonnensystem?",
        "Antwort": "Jupiter",
        "Tipp": "Dieser Planet hat einen riesigen Sturm, den sogenannten Großen Roten Fleck.",
        "Optionen": "Jupiter;Saturn;Neptun;Uranus",
        "Punkte": 100
    },
    {
        "Kategorie": "Wissenschaft und Technik",
        "Frage": "Welches Element hat das chemische Symbol 'Fe'?",
        "Antwort": "Eisen",
        "Tipp": "Dieses Metall ist in der Erdkruste weit verbreitet und magnetisch.",
        "Optionen": "Eisen;Kupfer;Silber;Blei",
        "Punkte": 100
    },
    {
        "Kategorie": "Wissenschaft und Technik",
        "Frage": "Was misst ein Barometer?",
        "Antwort": "Luftdruck",
        "Tipp": "Dieses Gerät wird oft in der Meteorologie verwendet.",
        "Optionen": "Luftdruck;Temperatur;Luftfeuchtigkeit;Windgeschwindigkeit",
        "Punkte": 100
    },
    {
        "Kategorie": "Wissenschaft und Technik",
        "Frage": "Wie viele Planeten gibt es in unserem Sonnensystem?",
        "Antwort": "8",
        "Tipp": "Seit 2006 ist Pluto kein Planet mehr.",
        "Optionen": "8;7;9;10",
        "Punkte": 200
    },
    {
        "Kategorie": "Wissenschaft und Technik",
        "Frage": "Welche Art von Energie wird durch Kernspaltung erzeugt?",
        "Antwort": "Kernenergie",
        "Tipp": "Diese Energieform wird in Kernkraftwerken genutzt.",
        "Optionen": "Kernenergie;Windenergie;Solarenergie;Gezeitenenergie",
        "Punkte": 200
    },
    {
        "Kategorie": "Wissenschaft und Technik",
        "Frage": "Welches Molekül ist das Hauptbestandteil von Erdgas?",
        "Antwort": "Methan",
        "Tipp": "Dieses Gas ist das einfachste Alkan.",
        "Optionen": "Methan;Ethan;Butan;Propan",
        "Punkte": 200
    },
    {
        "Kategorie": "Wissenschaft und Technik",
        "Frage": "Welche chemische Verbindung hat die Summenformel H2O?",
        "Antwort": "Wasser",
        "Tipp": "Diese Verbindung ist essentiell für alles Leben auf der Erde.",
        "Optionen": "Wasser;Kohlenstoffdioxid;Ammoniak;Methan",
        "Punkte": 300
    },
    {
        "Kategorie": "Wissenschaft und Technik",
        "Frage": "Wer entdeckte die Gesetze der Planetenbewegung?",
        "Antwort": "Johannes Kepler",
        "Tipp": "Er arbeitete eng mit dem dänischen Astronomen Tycho Brahe zusammen.",
        "Optionen": "Johannes Kepler;Isaac Newton;Galileo Galilei;Nikolaus Kopernikus",
        "Punkte": 300
    },
    {
        "Kategorie": "Wissenschaft und Technik",
        "Frage": "Welches Organ im menschlichen Körper ist für die Produktion von Insulin verantwortlich?",
        "Antwort": "Bauchspeicheldrüse",
        "Tipp": "Dieses Organ wird auch Pankreas genannt.",
        "Optionen": "Bauchspeicheldrüse;Leber;Nieren;Milz",
        "Punkte": 300
    },
    {
        "Kategorie": "Wissenschaft und Technik",
        "Frage": "Welche Art von Welle wird für die Übertragung von Mobilfunksignalen verwendet?",
        "Antwort": "Mikrowellen",
        "Tipp": "Diese Wellenart liegt im elektromagnetischen Spektrum zwischen Infrarot und Radio.",
        "Optionen": "Mikrowellen;Radiowellen;Infrarot;Ultraviolett",
        "Punkte": 400
    },
    {
        "Kategorie": "Wissenschaft und Technik",
        "Frage": "Welches Teilchen im Atom trägt eine positive Ladung?",
        "Antwort": "Proton",
        "Tipp": "Diese Teilchen befinden sich im Atomkern.",
        "Optionen": "Proton;Neutron;Elektron;Photon",
        "Punkte": 400
    },
    {
        "Kategorie": "Wissenschaft und Technik",
        "Frage": "Welcher Physiker entwickelte die Relativitätstheorie?",
        "Antwort": "Albert Einstein",
        "Tipp": "Seine berühmte Gleichung lautet E=mc².",
        "Optionen": "Albert Einstein;Isaac Newton;Niels Bohr;Max Planck",
        "Punkte": 400
    },
    {
        "Kategorie": "Wissenschaft und Technik",
        "Frage": "Welcher Wissenschaftler formulierte die Gesetze der Elektrizität und des Magnetismus, die seinen Namen tragen?",
        "Antwort": "James Clerk Maxwell",
        "Tipp": "Er kombinierte elektrische und magnetische Felder in vier berühmten Gleichungen.",
        "Optionen": "James Clerk Maxwell;Michael Faraday;Georg Simon Ohm;André-Marie Ampère",
        "Punkte": 100
    },
    {
        "Kategorie": "Wissenschaft und Technik",
        "Frage": "Welche wissenschaftliche Einheit wird verwendet, um die Stärke einer elektrischen Stromstärke zu messen?",
        "Antwort": "Ampere",
        "Tipp": "Diese Einheit wurde nach einem französischen Physiker benannt.",
        "Optionen": "Ampere;Volt;Watt;Ohm",
        "Punkte": 200
    },
    {
        "Kategorie": "Wissenschaft und Technik",
        "Frage": "Was ist die häufigste chemische Verbindung in der Erdatmosphäre?",
        "Antwort": "Stickstoff",
        "Tipp": "Diese chemische Verbindung macht etwa 78% der Erdatmosphäre aus.",
        "Optionen": "Stickstoff;Sauerstoff;Kohlendioxid;Argon",
        "Punkte": 300
    },
    {
        "Kategorie": "Wissenschaft und Technik",
        "Frage": "Welcher Wissenschaftler entdeckte die Struktur der DNA?",
        "Antwort": "James Watson und Francis Crick",
        "Tipp": "Sie erhielten den Nobelpreis für ihre Arbeit zusammen mit Maurice Wilkins.",
        "Optionen": "James Watson und Francis Crick;Rosalind Franklin;Gregor Mendel;Linus Pauling",
        "Punkte": 400
    },
    {
        "Kategorie": "Wissenschaft und Technik",
        "Frage": "Welches Gas wird bei der Photosynthese von Pflanzen freigesetzt?",
        "Antwort": "Sauerstoff",
        "Tipp": "Dieses Gas ist essentiell für die Atmung der meisten Lebewesen.",
        "Optionen": "Sauerstoff;Kohlendioxid;Stickstoff;Wasserstoff",
        "Punkte": 100
    },
    {
        "Kategorie": "Wissenschaft und Technik",
        "Frage": "Welche Farbe hat Kupfersulfat, wenn es in Wasser gelöst wird?",
        "Antwort": "Blau",
        "Tipp": "Diese Farbe ist charakteristisch für viele Kupferverbindungen.",
        "Optionen": "Blau;Grün;Rot;Gelb",
        "Punkte": 100
    },
    {
        "Kategorie": "Wissenschaft und Technik",
        "Frage": "Welches Tier wird häufig in der Genetikforschung verwendet und hat den wissenschaftlichen Namen *Drosophila melanogaster*?",
        "Antwort": "Fruchtfliege",
        "Tipp": "Dieses kleine Insekt ist ein beliebtes Modellorganismus in der Forschung.",
        "Optionen": "Fruchtfliege;Maus;Zebrafisch;Rhesusaffe",
        "Punkte": 100
    },
    {
        "Kategorie": "Wissenschaft und Technik",
        "Frage": "Wie nennt man die Kraft, die zwei Massen zueinander zieht?",
        "Antwort": "Gravitation",
        "Tipp": "Diese Kraft wirkt über große Entfernungen und ist proportional zu den Massen.",
        "Optionen": "Gravitation;Elektromagnetismus;Kernkraft;Reibungskraft",
        "Punkte": 200
    },
    {
        "Kategorie": "Wissenschaft und Technik",
        "Frage": "Wer erfand den ersten mechanischen Rechenautomat, auch bekannt als 'Pascaline'?",
        "Antwort": "Blaise Pascal",
        "Tipp": "Dieser französische Mathematiker und Philosoph ist auch für seine Arbeiten zur Wahrscheinlichkeitstheorie bekannt.",
        "Optionen": "Blaise Pascal;Gottfried Wilhelm Leibniz;Charles Babbage;Alan Turing",
        "Punkte": 200
    },
    {
        "Kategorie": "Wissenschaft und Technik",
        "Frage": "Was ist die chemische Formel für Ammoniak?",
        "Antwort": "NH3",
        "Tipp": "Dieses Molekül besteht aus Stickstoff und Wasserstoff.",
        "Optionen": "NH3;NO2;H2O;CO2",
        "Punkte": 200
    },
    {
        "Kategorie": "Wissenschaft und Technik",
        "Frage": "Welches Gerät wird verwendet, um elektrische Spannung zu messen?",
        "Antwort": "Voltmeter",
        "Tipp": "Dieses Gerät ist nach einem italienischen Physiker benannt, der als Pionier der Elektrizität gilt.",
        "Optionen": "Voltmeter;Amperemeter;Ohmmeter;Barometer",
        "Punkte": 300
    },
    {
        "Kategorie": "Wissenschaft und Technik",
        "Frage": "Welches Wissenschaftsfeld befasst sich mit der Untersuchung von Pilzen?",
        "Antwort": "Mykologie",
        "Tipp": "Dieses Wort leitet sich aus dem Griechischen ab und bedeutet 'Lehre von den Pilzen'.",
        "Optionen": "Mykologie;Botanik;Zoologie;Ökologie",
        "Punkte": 300
    },
    {
        "Kategorie": "Wissenschaft und Technik",
        "Frage": "Welches Gesetz besagt, dass in einem geschlossenen System die Gesamtenergie konstant bleibt?",
        "Antwort": "Energieerhaltungssatz",
        "Tipp": "Dieses Gesetz ist ein zentrales Prinzip der Thermodynamik.",
        "Optionen": "Energieerhaltungssatz;Hebelgesetz;Ohmsches Gesetz;Kinetische Energiegesetz",
        "Punkte": 300
    },
    {
        "Kategorie": "Wissenschaft und Technik",
        "Frage": "Welches chemische Element hat das höchste Atomgewicht?",
        "Antwort": "Uran",
        "Tipp": "Dieses Element wird häufig in der Kernenergie verwendet.",
        "Optionen": "Uran;Blei;Plutonium;Quecksilber",
        "Punkte": 400
    },
    {
        "Kategorie": "Wissenschaft und Technik",
        "Frage": "Welches Element ist das häufigste im Universum?",
        "Antwort": "Wasserstoff",
        "Tipp": "Dieses Element macht etwa 75% der normalen Materie im Universum aus.",
        "Optionen": "Wasserstoff;Helium;Kohlenstoff;Sauerstoff",
        "Punkte": 400
    },
    {
        "Kategorie": "Wissenschaft und Technik",
        "Frage": "Welcher Physiker formulierte die Quantenmechanik und ist bekannt für seine Gleichung zur Beschreibung von Elektronen?",
        "Antwort": "Erwin Schrödinger",
        "Tipp": "Er ist auch bekannt für das Gedankenexperiment mit einer Katze.",
        "Optionen": "Erwin Schrödinger;Werner Heisenberg;Max Planck;Niels Bohr",
        "Punkte": 400
    },
    {
        "Kategorie": "Wissenschaft und Technik",
        "Frage": "Was ist die am weitesten verbreitete Art von Sternen im Universum?",
        "Antwort": "Rote Zwerge",
        "Tipp": "Diese Sterne sind kleiner und kühler als unsere Sonne.",
        "Optionen": "Rote Zwerge;Weiße Zwerge;Neutronensterne;Braune Zwerge",
        "Punkte": 100
    },
    {
        "Kategorie": "Wissenschaft und Technik",
        "Frage": "Welcher Teil des Auges ist für die Regulation der Lichtmenge verantwortlich, die in das Auge gelangt?",
        "Antwort": "Iris",
        "Tipp": "Diese Struktur wird auch als Regenbogenhaut bezeichnet.",
        "Optionen": "Iris;Netzhaut;Linse;Hornhaut",
        "Punkte": 200
    },
    {
        "Kategorie": "Wissenschaft und Technik",
        "Frage": "Welcher Wissenschaftler entdeckte die Röntgenstrahlen?",
        "Antwort": "Wilhelm Conrad Röntgen",
        "Tipp": "Diese Strahlen wurden nach ihm benannt.",
        "Optionen": "Wilhelm Conrad Röntgen;Marie Curie;Antoine Henri Becquerel;Max von Laue",
        "Punkte": 300
    },
    {
        "Kategorie": "Wissenschaft und Technik",
        "Frage": "Welche Krankheit wird durch das HI-Virus verursacht?",
        "Antwort": "AIDS",
        "Tipp": "Diese Krankheit schwächt das Immunsystem und macht den Körper anfällig für Infektionen.",
        "Optionen": "AIDS;Hepatitis;Tuberkulose;Malaria",
        "Punkte": 400
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Welcher Künstler malte die 'Mona Lisa'?",
        "Antwort": "Leonardo da Vinci",
        "Tipp": "Dieser italienische Künstler war auch ein Wissenschaftler und Erfinder.",
        "Optionen": "Leonardo da Vinci;Michelangelo;Raphael;Vincent van Gogh",
        "Punkte": 100
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Welche Kunstbewegung wurde von Pablo Picasso und Georges Braque begründet?",
        "Antwort": "Kubismus",
        "Tipp": "Diese Bewegung stellt Objekte aus mehreren Perspektiven gleichzeitig dar.",
        "Optionen": "Kubismus;Impressionismus;Surrealismus;Expressionismus",
        "Punkte": 100
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Wer malte 'Das letzte Abendmahl'?",
        "Antwort": "Leonardo da Vinci",
        "Tipp": "Dieses Werk befindet sich im Kloster Santa Maria delle Grazie in Mailand.",
        "Optionen": "Leonardo da Vinci;Sandro Botticelli;Caravaggio;Giotto",
        "Punkte": 100
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Welcher Maler ist für seine Gemälde von Wasserlilien bekannt?",
        "Antwort": "Claude Monet",
        "Tipp": "Dieser Künstler ist einer der Begründer des Impressionismus.",
        "Optionen": "Claude Monet;Édouard Manet;Pierre-Auguste Renoir;Camille Pissarro",
        "Punkte": 200
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Welches berühmte Gemälde wurde von Edvard Munch geschaffen und zeigt eine Person, die sich das Gesicht hält und schreit?",
        "Antwort": "Der Schrei",
        "Tipp": "Dieses Bild gilt als Ikone der Moderne und symbolisiert existenzielle Angst.",
        "Optionen": "Der Schrei;Die Sternennacht;Guernica;Die Erschaffung Adams",
        "Punkte": 200
    },
    {
        "Kategorie": "Kunst",
        "Frage": "In welchem Land entstand die Kunstbewegung 'Dada'?",
        "Antwort": "Schweiz",
        "Tipp": "Diese Bewegung begann in Zürich während des Ersten Weltkriegs.",
        "Optionen": "Schweiz;Deutschland;Frankreich;Niederlande",
        "Punkte": 200
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Welche Technik verwendete Michelangelo hauptsächlich für seine Skulpturen?",
        "Antwort": "Marmorbildhauerei",
        "Tipp": "Michelangelos berühmteste Skulptur ist die 'David'.",
        "Optionen": "Marmorbildhauerei;Bronzeguss;Holzschnitzerei;Terrakotta",
        "Punkte": 300
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Welcher Künstler war einer der Hauptvertreter des Surrealismus und malte das Werk 'Die Beständigkeit der Erinnerung'?",
        "Antwort": "Salvador Dalí",
        "Tipp": "In diesem Gemälde sind schmelzende Uhren abgebildet.",
        "Optionen": "Salvador Dalí;René Magritte;Max Ernst;Joan Miró",
        "Punkte": 300
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Welche Farbe dominiert in Yves Kleins berühmten Werk 'IKB 191'?",
        "Antwort": "Blau",
        "Tipp": "Diese Farbe ist als 'International Klein Blue' bekannt.",
        "Optionen": "Blau;Rot;Gelb;Grün",
        "Punkte": 300
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Welches Gemälde von Francisco Goya zeigt den schrecklichen Moment, in dem ein Riese einen Menschen verschlingt?",
        "Antwort": "Saturn verschlingt seinen Sohn",
        "Tipp": "Dieses Werk gehört zu Goyas 'Schwarzen Gemälden'.",
        "Optionen": "Saturn verschlingt seinen Sohn;Das Floß der Medusa;Die Erschießung der Aufständischen;Der dritte Mai 1808",
        "Punkte": 400
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Wer schuf die Skulptur 'Der Denker'?",
        "Antwort": "Auguste Rodin",
        "Tipp": "Diese Skulptur ist Teil eines größeren Werkes namens 'Das Höllentor'.",
        "Optionen": "Auguste Rodin;Alberto Giacometti;Henry Moore;Constantin Brâncuși",
        "Punkte": 400
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Welches architektonische Wunderwerk wurde vom spanischen Architekten Antoni Gaudí entworfen?",
        "Antwort": "Sagrada Família",
        "Tipp": "Diese Kirche befindet sich in Barcelona und ist immer noch unvollendet.",
        "Optionen": "Sagrada Família;Park Güell;Casa Milà;Palau Güell",
        "Punkte": 400
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Welche Kunstbewegung wird oft als Reaktion auf den Impressionismus angesehen und konzentriert sich auf die Symbolik und emotionale Tiefe?",
        "Antwort": "Expressionismus",
        "Tipp": "Diese Bewegung blühte im frühen 20. Jahrhundert in Deutschland auf.",
        "Optionen": "Expressionismus;Kubismus;Realismus;Fauvismus",
        "Punkte": 100
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Wer malte das berühmte Wandgemälde 'Guernica'?",
        "Antwort": "Pablo Picasso",
        "Tipp": "Dieses Werk ist ein Protest gegen den spanischen Bürgerkrieg.",
        "Optionen": "Pablo Picasso;Joan Miró;Diego Rivera;Frida Kahlo",
        "Punkte": 200
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Welcher französische Maler ist für seine Darstellungen von Balletttänzern bekannt?",
        "Antwort": "Edgar Degas",
        "Tipp": "Dieser Künstler wird oft dem Impressionismus zugeordnet, obwohl er sich selbst nicht als Impressionist sah.",
        "Optionen": "Edgar Degas;Claude Monet;Pierre-Auguste Renoir;Paul Cézanne",
        "Punkte": 300
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Welcher amerikanische Künstler ist bekannt für seine Gemälde von Campbells Suppendosen?",
        "Antwort": "Andy Warhol",
        "Tipp": "Dieser Künstler war eine zentrale Figur der Pop-Art.",
        "Optionen": "Andy Warhol;Roy Lichtenstein;Jackson Pollock;Mark Rothko",
        "Punkte": 400
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Welcher Künstler ist bekannt für seine Darstellungen von Sonnenblumen?",
        "Antwort": "Vincent van Gogh",
        "Tipp": "Dieser niederländische Künstler schnitt sich ein Ohr ab.",
        "Optionen": "Vincent van Gogh;Claude Monet;Paul Gauguin;Georges Seurat",
        "Punkte": 100
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Welche Kunstbewegung zeichnete sich durch die Darstellung von fließenden Linien und natürlichen Formen aus und entstand im späten 19. Jahrhundert?",
        "Antwort": "Jugendstil",
        "Tipp": "Diese Bewegung wird auch als Art Nouveau bezeichnet.",
        "Optionen": "Jugendstil;Barock;Rokoko;Impressionismus",
        "Punkte": 100
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Wer malte 'Die Sternennacht'?",
        "Antwort": "Vincent van Gogh",
        "Tipp": "Dieses Gemälde zeigt einen Nachthimmel mit wirbelnden Sternen über einem Dorf.",
        "Optionen": "Vincent van Gogh;Paul Cézanne;Henri Rousseau;Georges Braque",
        "Punkte": 100
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Welche Technik des Punktierens, die hauptsächlich in der Malerei verwendet wird, wurde von Georges Seurat entwickelt?",
        "Antwort": "Pointillismus",
        "Tipp": "Diese Technik besteht aus der Anwendung kleiner, oft unterschiedlicher Farbpunkte.",
        "Optionen": "Pointillismus;Impasto;Grisaille;Sfumato",
        "Punkte": 200
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Welcher russische Künstler malte das abstrakte Werk 'Komposition VII'?",
        "Antwort": "Wassily Kandinsky",
        "Tipp": "Er gilt als einer der Pioniere der abstrakten Kunst.",
        "Optionen": "Wassily Kandinsky;Kazimir Malevich;Piet Mondrian;El Lissitzky",
        "Punkte": 200
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Welches Bauwerk gilt als eines der wichtigsten Werke der Gotik und befindet sich in Paris?",
        "Antwort": "Notre-Dame de Paris",
        "Tipp": "Dieses Bauwerk ist eine Kathedrale, die für ihre fliegenden Strebewerke und Wasserspeier bekannt ist.",
        "Optionen": "Notre-Dame de Paris;Kölner Dom;Westminster Abbey;Sagrada Família",
        "Punkte": 200
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Welche italienische Familie war im 15. und 16. Jahrhundert eine bedeutende Fördererin der Künste und trug zur Renaissance in Florenz bei?",
        "Antwort": "Medici",
        "Tipp": "Diese Familie brachte auch mehrere Päpste hervor.",
        "Optionen": "Medici;Borgia;Sforza;Gonzaga",
        "Punkte": 300
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Welcher spanische Maler war ein führender Vertreter des Surrealismus und schuf das Werk 'Der Schlaf'?",
        "Antwort": "Salvador Dalí",
        "Tipp": "Dieser Künstler ist bekannt für seine exzentrischen Schnurrbärte und surrealen Werke.",
        "Optionen": "Salvador Dalí;Joan Miró;Pablo Picasso;Francisco Goya",
        "Punkte": 300
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Welches Kunstmuseum in Paris beherbergt die weltberühmte 'Mona Lisa'?",
        "Antwort": "Louvre",
        "Tipp": "Dieses Museum war früher ein Königspalast.",
        "Optionen": "Louvre;Musée d'Orsay;Centre Pompidou;Palais de Tokyo",
        "Punkte": 300
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Welcher Renaissancekünstler schuf die Fresken in der Sixtinischen Kapelle?",
        "Antwort": "Michelangelo",
        "Tipp": "Dieses Werk umfasst Szenen aus der Genesis und das Jüngste Gericht.",
        "Optionen": "Michelangelo;Raphael;Leonardo da Vinci;Sandro Botticelli",
        "Punkte": 400
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Wer schuf das berühmte expressionistische Gemälde 'Der blaue Reiter'?",
        "Antwort": "Wassily Kandinsky",
        "Tipp": "Dieses Werk gab einer Künstlergruppe in München ihren Namen.",
        "Optionen": "Wassily Kandinsky;Franz Marc;Gabriele Münter;Paul Klee",
        "Punkte": 400
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Welches Werk von Gustav Klimt zeigt ein goldenes Paar, das sich in einer innigen Umarmung befindet?",
        "Antwort": "Der Kuss",
        "Tipp": "Dieses Werk ist Teil von Klimts 'Goldener Periode'.",
        "Optionen": "Der Kuss;Die Jungfrau;Adele Bloch-Bauer I;Danaë",
        "Punkte": 400
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Wer war der führende Architekt des Barock, der den Petersdom in Rom vollendete?",
        "Antwort": "Gian Lorenzo Bernini",
        "Tipp": "Er war auch ein bedeutender Bildhauer des Barock.",
        "Optionen": "Gian Lorenzo Bernini;Francesco Borromini;Michelangelo;Andrea Palladio",
        "Punkte": 100
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Welche Künstlerin ist bekannt für ihre großformatigen Blumenbilder und gilt als eine der wichtigsten Vertreterinnen der amerikanischen Moderne?",
        "Antwort": "Georgia O'Keeffe",
        "Tipp": "Sie wird oft als 'Mutter des amerikanischen Modernismus' bezeichnet.",
        "Optionen": "Georgia O'Keeffe;Frida Kahlo;Mary Cassatt;Lee Krasner",
        "Punkte": 200
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Welche Kunstbewegung entwickelte sich in den 1950er Jahren und bezieht sich auf die Massenkultur und Konsumgesellschaft?",
        "Antwort": "Pop-Art",
        "Tipp": "Diese Bewegung wurde von Künstlern wie Andy Warhol und Roy Lichtenstein geprägt.",
        "Optionen": "Pop-Art;Dadaismus;Konstruktivismus;Surrealismus",
        "Punkte": 300
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Welcher niederländische Maler ist bekannt für seine Selbstporträts und das Gemälde 'Die Nachtwache'?",
        "Antwort": "Rembrandt",
        "Tipp": "Dieser Künstler gilt als einer der größten Maler des Barock.",
        "Optionen": "Rembrandt;Jan Vermeer;Frans Hals;Hieronymus Bosch",
        "Punkte": 400
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Welches Instrument wird in Antonio Vivaldis 'Die Vier Jahreszeiten' prominent gespielt?",
        "Antwort": "Violine",
        "Tipp": "Dieses Streichinstrument wird oft als das führende Instrument in Barockkonzerten verwendet.",
        "Optionen": "Violine;Klavier;Flöte;Harfe",
        "Punkte": 100
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Was stellt Michelangelos Deckenfresko in der Sixtinischen Kapelle dar?",
        "Antwort": "Die Erschaffung Adams",
        "Tipp": "Es zeigt eine Szene, in der Gott Leben in den ersten Menschen haucht.",
        "Optionen": "Die Erschaffung Adams;Das Jüngste Gericht;Der Sündenfall;Die Verkündigung",
        "Punkte": 100
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Welcher Tanzstil stammt aus Argentinien und ist bekannt für seine leidenschaftliche und dramatische Musik?",
        "Antwort": "Tango",
        "Tipp": "Dieser Tanzstil entwickelte sich in den Armenvierteln von Buenos Aires.",
        "Optionen": "Tango;Salsa;Flamenco;Walzer",
        "Punkte": 100
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Welche Epoche der Kunst wird als 'Blütezeit der griechischen Kunst' bezeichnet?",
        "Antwort": "Klassik",
        "Tipp": "Diese Epoche umfasst Werke wie die Skulptur des Diskobolos.",
        "Optionen": "Klassik;Hellenismus;Archaik;Gotik",
        "Punkte": 200
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Was ist das zentrale Thema in Edvard Munchs Gemälde 'Der Schrei'?",
        "Antwort": "Existenzielle Angst",
        "Tipp": "Das Bild zeigt eine Figur, die sich vor einem roten Himmel die Ohren zuhält.",
        "Optionen": "Existenzielle Angst;Freude;Liebe;Wut",
        "Punkte": 200
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Welcher französische Komponist ist bekannt für seine Komposition 'Clair de Lune'?",
        "Antwort": "Claude Debussy",
        "Tipp": "Dieser Komponist ist einer der wichtigsten Vertreter des Impressionismus in der Musik.",
        "Optionen": "Claude Debussy;Maurice Ravel;Camille Saint-Saëns;Erik Satie",
        "Punkte": 200
    },
    {
        "Kategorie": "Kunst",
        "Frage": "In welcher Kunstform war Pina Bausch einflussreich?",
        "Antwort": "Tanztheater",
        "Tipp": "Diese Kunstform kombiniert Elemente des Tanzes und der darstellenden Kunst.",
        "Optionen": "Tanztheater;Ballett;Oper;Pantomime",
        "Punkte": 300
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Welches Element der Gotik ist charakteristisch für die Kathedralen von Chartres und Reims?",
        "Antwort": "Spitzbögen",
        "Tipp": "Diese Struktur ermöglicht größere Fenster und höhere Decken in gotischen Kirchen.",
        "Optionen": "Spitzbögen;Rundbögen;Säulengänge;Triforien",
        "Punkte": 300
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Welcher moderne Künstler ist bekannt für die Installation von riesigen, schwebenden Ballons, die an Tiere erinnern?",
        "Antwort": "Jeff Koons",
        "Tipp": "Seine Werke wie 'Balloon Dog' sind Beispiele für Kitsch in der Kunst.",
        "Optionen": "Jeff Koons;Damien Hirst;Banksy;Anish Kapoor",
        "Punkte": 300
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Welches barocke Werk von Gian Lorenzo Bernini zeigt den Moment der Ekstase der Heiligen Teresa?",
        "Antwort": "Ekstase der Heiligen Teresa",
        "Tipp": "Diese Skulptur befindet sich in der Kirche Santa Maria della Vittoria in Rom.",
        "Optionen": "Ekstase der Heiligen Teresa;David;Apollo und Daphne;Pluto und Proserpina",
        "Punkte": 400
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Welcher Maler ist bekannt für die Entwicklung der Drip-Painting-Technik?",
        "Antwort": "Jackson Pollock",
        "Tipp": "Dieser Künstler war eine zentrale Figur des Abstrakten Expressionismus.",
        "Optionen": "Jackson Pollock;Mark Rothko;Willem de Kooning;Franz Kline",
        "Punkte": 400
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Welche Kunstrichtung wird durch den Einsatz von geometrischen Formen und Linien charakterisiert und wurde von Piet Mondrian weiterentwickelt?",
        "Antwort": "Konstruktivismus",
        "Tipp": "Diese Kunstrichtung betont die Abstraktion und Ordnung.",
        "Optionen": "Konstruktivismus;Suprematismus;Kubismus;Futurismus",
        "Punkte": 400
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Welche Farbe dominiert in Pablo Picassos 'Blauer Periode'?",
        "Antwort": "Blau",
        "Tipp": "Diese Phase in Picassos Karriere war durch Melancholie und Einsamkeit geprägt.",
        "Optionen": "Blau;Rot;Gelb;Grün",
        "Punkte": 100
    },
    {
        "Kategorie": "Kunst",
        "Frage": "In welcher Oper von Richard Wagner wird die Geschichte des heiligen Grals erzählt?",
        "Antwort": "Parsifal",
        "Tipp": "Diese Oper ist Wagners letztes vollendetes Werk.",
        "Optionen": "Parsifal;Der Ring des Nibelungen;Lohengrin;Die Meistersinger von Nürnberg",
        "Punkte": 200
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Welcher Kunststil dominierte die Architektur und Kunst im Europa des 17. Jahrhunderts und wird durch dramatische Bewegung und klare Details charakterisiert?",
        "Antwort": "Barock",
        "Tipp": "Dieser Stil entstand als Reaktion auf die Protestantische Reformation und die strengen Linien der Renaissance.",
        "Optionen": "Barock;Rokoko;Klassizismus;Gotik",
        "Punkte": 300
    },
    {
        "Kategorie": "Kunst",
        "Frage": "Welches architektonische Meisterwerk von Frank Lloyd Wright ist für seine Integration in die natürliche Umgebung bekannt?",
        "Antwort": "Fallingwater",
        "Tipp": "Dieses Haus wurde über einem Wasserfall gebaut und ist ein ikonisches Beispiel für organische Architektur.",
        "Optionen": "Fallingwater;Guggenheim-Museum;Robie House;Johnson Wax Headquarters",
        "Punkte": 400
    },
    {
        "Kategorie": "Literatur",
        "Frage": "Wer schrieb den Roman '1984'?",
        "Antwort": "George Orwell",
        "Tipp": "Dieser britische Autor ist auch für 'Animal Farm' bekannt.",
        "Optionen": "George Orwell;Aldous Huxley;Ray Bradbury;Arthur C. Clarke",
        "Punkte": 100
    },
    {
        "Kategorie": "Literatur",
        "Frage": "Welches Werk von William Shakespeare erzählt die Geschichte von zwei verfeindeten Familien und einer tragischen Liebesgeschichte?",
        "Antwort": "Romeo und Julia",
        "Tipp": "Dieses Werk spielt in Verona, Italien.",
        "Optionen": "Romeo und Julia;Hamlet;Othello;Macbeth",
        "Punkte": 100
    },
    {
        "Kategorie": "Literatur",
        "Frage": "Welche Farbe ist im Titel des berühmten Werks von F. Scott Fitzgerald, das die Dekadenz der 1920er Jahre beschreibt?",
        "Antwort": "Grün",
        "Tipp": "Dieses Werk handelt von Jay Gatsby und seiner unerfüllten Liebe zu Daisy Buchanan.",
        "Optionen": "Grün;Blau;Rot;Schwarz",
        "Punkte": 100
    },
    {
        "Kategorie": "Literatur",
        "Frage": "Welche bekannte Trilogie wurde von J.R.R. Tolkien geschrieben?",
        "Antwort": "Der Herr der Ringe",
        "Tipp": "Diese Trilogie spielt in der fiktiven Welt von Mittelerde.",
        "Optionen": "Der Herr der Ringe;Die Chroniken von Narnia;Harry Potter;Das Lied von Eis und Feuer",
        "Punkte": 200
    },
    {
        "Kategorie": "Literatur",
        "Frage": "Welcher Roman von Mary Shelley gilt als eines der ersten Werke der Science-Fiction?",
        "Antwort": "Frankenstein",
        "Tipp": "Dieses Werk erzählt die Geschichte eines Wissenschaftlers, der Leben erschafft.",
        "Optionen": "Frankenstein;Dracula;Der seltsame Fall des Dr. Jekyll und Mr. Hyde;Die Insel des Dr. Moreau",
        "Punkte": 200
    },
    {
        "Kategorie": "Literatur",
        "Frage": "Wer schrieb das Werk 'Don Quijote', das als eines der bedeutendsten Werke der spanischen Literatur gilt?",
        "Antwort": "Miguel de Cervantes",
        "Tipp": "Dieses Buch erzählt die Geschichte eines Ritters, der gegen Windmühlen kämpft.",
        "Optionen": "Miguel de Cervantes;Gabriel García Márquez;Federico García Lorca;Jorge Luis Borges",
        "Punkte": 200
    },
    {
        "Kategorie": "Literatur",
        "Frage": "Welche epische Dichtung wurde von Homer geschrieben und erzählt die Geschichte der Rückkehr des Odysseus nach dem Trojanischen Krieg?",
        "Antwort": "Die Odyssee",
        "Tipp": "Dieses Werk beschreibt eine zehnjährige Reise voller Abenteuer und Prüfungen.",
        "Optionen": "Die Odyssee;Die Ilias;Aeneis;Metamorphosen",
        "Punkte": 300
    },
    {
        "Kategorie": "Literatur",
        "Frage": "Welches Werk von Hermann Hesse beschreibt die spirituelle Reise eines Mannes namens Siddhartha?",
        "Antwort": "Siddhartha",
        "Tipp": "Dieses Werk handelt von der Suche nach Erleuchtung und innerem Frieden.",
        "Optionen": "Siddhartha;Der Steppenwolf;Narziss und Goldmund;Demian",
        "Punkte": 300
    },
    {
        "Kategorie": "Literatur",
        "Frage": "Welcher französische Roman erzählt die Geschichte eines unschuldigen Mannes, der zu Unrecht inhaftiert wird und Rache an seinen Peinigern übt?",
        "Antwort": "Der Graf von Monte Cristo",
        "Tipp": "Dieses Werk wurde von Alexandre Dumas geschrieben.",
        "Optionen": "Der Graf von Monte Cristo;Die drei Musketiere;Les Misérables;Notre-Dame de Paris",
        "Punkte": 300
    },
    {
        "Kategorie": "Literatur",
        "Frage": "Welche Figur aus den Werken von Charles Dickens ist für ihre Geizigkeit und ihre Wandlung in der Weihnachtszeit bekannt?",
        "Antwort": "Ebenezer Scrooge",
        "Tipp": "Diese Figur stammt aus 'Eine Weihnachtsgeschichte'.",
        "Optionen": "Ebenezer Scrooge;Oliver Twist;David Copperfield;Nicholas Nickleby",
        "Punkte": 400
    },
    {
        "Kategorie": "Literatur",
        "Frage": "Welcher moderne amerikanische Roman von Harper Lee behandelt Themen wie Rassismus und soziale Ungerechtigkeit im Süden der USA?",
        "Antwort": "Wer die Nachtigall stört",
        "Tipp": "Dieses Werk gewann den Pulitzer-Preis.",
        "Optionen": "Wer die Nachtigall stört;Die Trauben des Zorns;Der Fänger im Roggen;Beloved",
        "Punkte": 400
    },
    {
        "Kategorie": "Literatur",
        "Frage": "Welcher Roman von George Orwell schildert eine dystopische Zukunft, in der die Regierung die totale Kontrolle über das Leben der Menschen ausübt?",
        "Antwort": "1984",
        "Tipp": "Das Buch führt den Begriff 'Big Brother' ein.",
        "Optionen": "1984;Brave New World;Fahrenheit 451;Schöne neue Welt",
        "Punkte": 400
    },
    {
        "Kategorie": "Literatur",
        "Frage": "In welchem Werk von William Golding stranden eine Gruppe von Jungen auf einer einsamen Insel und gründen eine primitive Gesellschaft?",
        "Antwort": "Herr der Fliegen",
        "Tipp": "Dieses Buch untersucht die dunklen Seiten der menschlichen Natur.",
        "Optionen": "Herr der Fliegen;Der große Gatsby;Moby Dick;Die Schatzinsel",
        "Punkte": 100
    },
    {
        "Kategorie": "Literatur",
        "Frage": "Welche Erzählung von Franz Kafka beschreibt die Verwandlung eines Mannes in ein ungeheures Ungeziefer?",
        "Antwort": "Die Verwandlung",
        "Tipp": "Der Hauptcharakter heißt Gregor Samsa.",
        "Optionen": "Die Verwandlung;Der Prozess;Das Schloss;In der Strafkolonie",
        "Punkte": 200
    },
    {
        "Kategorie": "Literatur",
        "Frage": "Welches Werk von Leo Tolstoi erzählt die Geschichte des russischen Adels während der Napoleonischen Kriege?",
        "Antwort": "Krieg und Frieden",
        "Tipp": "Dieses Buch ist eines der bedeutendsten Werke der Weltliteratur.",
        "Optionen": "Krieg und Frieden;Anna Karenina;Die Kreutzersonate;Der Tod des Iwan Iljitsch",
        "Punkte": 300
    },
    {
        "Kategorie": "Literatur",
        "Frage": "Welches Werk von Gabriel García Márquez erzählt die Geschichte der Familie Buendía über mehrere Generationen?",
        "Antwort": "Hundert Jahre Einsamkeit",
        "Tipp": "Dieses Werk ist ein Paradebeispiel für den magischen Realismus.",
        "Optionen": "Hundert Jahre Einsamkeit;Chronik eines angekündigten Todes;Liebe in den Zeiten der Cholera;Der Herbst des Patriarchen",
        "Punkte": 400
    },
    {
        "Kategorie": "Literatur",
        "Frage": "Welcher berühmte englische Autor schrieb die Werke 'Hamlet' und 'Macbeth'?",
        "Antwort": "William Shakespeare",
        "Tipp": "Er wird oft als der größte Dramatiker der englischen Sprache angesehen.",
        "Optionen": "William Shakespeare;Christopher Marlowe;John Milton;Geoffrey Chaucer",
        "Punkte": 100
    },
    {
        "Kategorie": "Literatur",
        "Frage": "Welches Werk von J.K. Rowling erzählt die Geschichte eines jungen Zauberers?",
        "Antwort": "Harry Potter",
        "Tipp": "Diese Buchreihe wurde in sieben Bänden veröffentlicht.",
        "Optionen": "Harry Potter;Der Herr der Ringe;Die Chroniken von Narnia;Percy Jackson",
        "Punkte": 100
    },
    {
        "Kategorie": "Literatur",
        "Frage": "Welches Werk von John Steinbeck beschreibt das Schicksal von Wanderarbeitern während der Großen Depression in den USA?",
        "Antwort": "Früchte des Zorns",
        "Tipp": "Dieses Buch gewann den Pulitzer-Preis im Jahr 1940.",
        "Optionen": "Früchte des Zorns;Von Mäusen und Menschen;Der Winter unseres Missvergnügens;Jenseits von Eden",
        "Punkte": 100
    },
    {
        "Kategorie": "Literatur",
        "Frage": "Welcher Roman von Jane Austen handelt von der komplexen Beziehung zwischen Elizabeth Bennet und Mr. Darcy?",
        "Antwort": "Stolz und Vorurteil",
        "Tipp": "Dieses Werk wurde mehrfach für Film und Fernsehen adaptiert.",
        "Optionen": "Stolz und Vorurteil;Emma;Verstand und Gefühl;Mansfield Park",
        "Punkte": 200
    },
    {
        "Kategorie": "Literatur",
        "Frage": "Welcher Roman von Ernest Hemingway erzählt die Geschichte eines alten Fischers, der einen großen Marlin fängt?",
        "Antwort": "Der alte Mann und das Meer",
        "Tipp": "Dieses Werk brachte dem Autor den Nobelpreis für Literatur ein.",
        "Optionen": "Der alte Mann und das Meer;In einem anderen Land;Wem die Stunde schlägt;Schnee auf dem Kilimandscharo",
        "Punkte": 200
    },
    {
        "Kategorie": "Literatur",
        "Frage": "Welcher Autor schrieb den dystopischen Roman 'Fahrenheit 451'?",
        "Antwort": "Ray Bradbury",
        "Tipp": "Dieses Werk thematisiert eine Gesellschaft, in der Bücher verboten sind.",
        "Optionen": "Ray Bradbury;Aldous Huxley;George Orwell;Philip K. Dick",
        "Punkte": 200
    },
    {
        "Kategorie": "Literatur",
        "Frage": "Welches Werk von Johann Wolfgang von Goethe erzählt die tragische Geschichte eines jungen Mannes, der sich aus Liebeskummer das Leben nimmt?",
        "Antwort": "Die Leiden des jungen Werther",
        "Tipp": "Dieses Werk gilt als eines der bedeutendsten Werke des Sturm und Drang.",
        "Optionen": "Die Leiden des jungen Werther;Faust;Wilhelm Meisters Lehrjahre;Iphigenie auf Tauris",
        "Punkte": 300
    },
    {
        "Kategorie": "Literatur",
        "Frage": "Welche berühmte russische Autorin schrieb den Roman 'Anna Karenina'?",
        "Antwort": "Leo Tolstoi",
        "Tipp": "Dieser Autor schrieb auch 'Krieg und Frieden'.",
        "Optionen": "Leo Tolstoi;Fyodor Dostojewski;Anton Tschechow;Ivan Turgenev",
        "Punkte": 300
    },
    {
        "Kategorie": "Literatur",
        "Frage": "Welcher Science-Fiction-Autor schrieb 'Der Wüstenplanet' (Dune), das als eines der wichtigsten Werke des Genres gilt?",
        "Antwort": "Frank Herbert",
        "Tipp": "Dieses Buch ist der erste Teil einer sechsbändigen Serie.",
        "Optionen": "Frank Herbert;Isaac Asimov;Arthur C. Clarke;Philip K. Dick",
        "Punkte": 300
    },
    {
        "Kategorie": "Literatur",
        "Frage": "Welcher irische Autor schrieb das epische Werk 'Ulysses', das die Geschichte von Leopold Bloom an einem einzigen Tag erzählt?",
        "Antwort": "James Joyce",
        "Tipp": "Dieses Werk wird oft als eines der schwierigsten Bücher der Weltliteratur angesehen.",
        "Optionen": "James Joyce;Samuel Beckett;Oscar Wilde;W.B. Yeats",
        "Punkte": 400
    },
    {
        "Kategorie": "Literatur",
        "Frage": "Welcher französische Autor schrieb 'Madame Bovary', ein Werk, das als ein Meisterwerk des Realismus gilt?",
        "Antwort": "Gustave Flaubert",
        "Tipp": "Dieses Buch erzählt die Geschichte einer unglücklichen Ehefrau, die sich in Fantasien flüchtet.",
        "Optionen": "Gustave Flaubert;Honoré de Balzac;Émile Zola;Stendhal",
        "Punkte": 400
    },
    {
        "Kategorie": "Literatur",
        "Frage": "Welcher amerikanische Autor ist bekannt für seine humorvollen Kurzgeschichten und schrieb 'The Gift of the Magi'?",
        "Antwort": "O. Henry",
        "Tipp": "Dieser Autor ist bekannt für seine überraschenden Wendungen am Ende der Geschichten.",
        "Optionen": "O. Henry;Mark Twain;Ambrose Bierce;Edgar Allan Poe",
        "Punkte": 400
    },
    {
        "Kategorie": "Literatur",
        "Frage": "Welcher moderne lateinamerikanische Autor schrieb 'Das Haus der Geister'?",
        "Antwort": "Isabel Allende",
        "Tipp": "Dieses Werk gilt als ein wichtiges Beispiel des magischen Realismus.",
        "Optionen": "Isabel Allende;Gabriel García Márquez;Mario Vargas Llosa;Jorge Luis Borges",
        "Punkte": 100
    },
    {
        "Kategorie": "Literatur",
        "Frage": "Welcher Autor schrieb die 'Chroniken von Narnia', eine populäre Fantasy-Buchreihe?",
        "Antwort": "C.S. Lewis",
        "Tipp": "Diese Buchreihe beginnt mit 'Der König von Narnia'.",
        "Optionen": "C.S. Lewis;J.R.R. Tolkien;Philip Pullman;T.H. White",
        "Punkte": 200
    },
    {
        "Kategorie": "Literatur",
        "Frage": "Welches Werk von John Milton erzählt die biblische Geschichte des Sündenfalls von Adam und Eva?",
        "Antwort": "Das verlorene Paradies",
        "Tipp": "Dieses epische Gedicht wurde im 17. Jahrhundert veröffentlicht.",
        "Optionen": "Das verlorene Paradies;Die Göttliche Komödie;Das Nibelungenlied;Der Kampf der Künste",
        "Punkte": 300
    },
    {
        "Kategorie": "Literatur",
        "Frage": "Welches berühmte Werk von Charles Dickens beginnt mit den Worten 'Es war die beste aller Zeiten, es war die schlimmste aller Zeiten'?",
        "Antwort": "Eine Geschichte aus zwei Städten",
        "Tipp": "Dieser Roman spielt während der Französischen Revolution.",
        "Optionen": "Eine Geschichte aus zwei Städten;David Copperfield;Große Erwartungen;Oliver Twist",
        "Punkte": 400
    },
    {
        "Kategorie": "Film und Fernsehen",
        "Frage": "Welcher Schauspieler spielte die Rolle des Jack Dawson im Film 'Titanic'?",
        "Antwort": "Leonardo DiCaprio",
        "Tipp": "Dieser Schauspieler gewann seinen ersten Oscar für 'The Revenant'.",
        "Optionen": "Leonardo DiCaprio;Brad Pitt;Tom Hanks;Matt Damon",
        "Punkte": 100
    },
    {
        "Kategorie": "Film und Fernsehen",
        "Frage": "Welche Serie handelt von einem Chemielehrer, der zum Methamphetamin-Hersteller wird?",
        "Antwort": "Breaking Bad",
        "Tipp": "Diese Serie wurde von Vince Gilligan geschaffen.",
        "Optionen": "Breaking Bad;The Wire;Better Call Saul;Narcos",
        "Punkte": 100
    },
    {
        "Kategorie": "Film und Fernsehen",
        "Frage": "Welcher Filmregisseur ist bekannt für Filme wie 'Pulp Fiction' und 'Kill Bill'?",
        "Antwort": "Quentin Tarantino",
        "Tipp": "Seine Filme sind bekannt für ihre nichtlineare Erzählweise und starken Dialoge.",
        "Optionen": "Quentin Tarantino;Martin Scorsese;Christopher Nolan;Steven Spielberg",
        "Punkte": 100
    },
    {
        "Kategorie": "Film und Fernsehen",
        "Frage": "Welche Serie spielt in der fiktiven Welt Westeros und basiert auf den Büchern von George R.R. Martin?",
        "Antwort": "Game of Thrones",
        "Tipp": "Diese Serie hat einen der berühmtesten Drachen der Fernsehgeschichte.",
        "Optionen": "Game of Thrones;Vikings;The Witcher;Spartacus",
        "Punkte": 200
    },
    {
        "Kategorie": "Film und Fernsehen",
        "Frage": "Welcher Schauspieler verkörperte den Charakter des Indiana Jones?",
        "Antwort": "Harrison Ford",
        "Tipp": "Er ist auch bekannt für seine Rolle als Han Solo.",
        "Optionen": "Harrison Ford;Tom Cruise;Mel Gibson;Bruce Willis",
        "Punkte": 200
    },
    {
        "Kategorie": "Film und Fernsehen",
        "Frage": "Welche animierte Serie handelt von einer dysfunktionalen Familie mit einem Vater namens Homer?",
        "Antwort": "Die Simpsons",
        "Tipp": "Diese Serie läuft seit den späten 1980er Jahren.",
        "Optionen": "Die Simpsons;Family Guy;South Park;Rick and Morty",
        "Punkte": 200
    },
    {
        "Kategorie": "Film und Fernsehen",
        "Frage": "Welcher Filmregisseur ist bekannt für die 'Herr der Ringe'-Trilogie?",
        "Antwort": "Peter Jackson",
        "Tipp": "Er ist auch bekannt für seine Arbeit an der 'Hobbit'-Trilogie.",
        "Optionen": "Peter Jackson;James Cameron;George Lucas;Steven Spielberg",
        "Punkte": 300
    },
    {
        "Kategorie": "Film und Fernsehen",
        "Frage": "Welcher Charakter aus 'Star Wars' ist als der Vater von Luke Skywalker bekannt?",
        "Antwort": "Darth Vader",
        "Tipp": "Dieser Charakter wird auch als Anakin Skywalker geboren.",
        "Optionen": "Darth Vader;Yoda;Obi-Wan Kenobi;Han Solo",
        "Punkte": 300
    },
    {
        "Kategorie": "Film und Fernsehen",
        "Frage": "Welche Schauspielerin spielte die Hauptrolle in dem Film 'Black Swan'?",
        "Antwort": "Natalie Portman",
        "Tipp": "Sie gewann einen Oscar für diese Rolle.",
        "Optionen": "Natalie Portman;Scarlett Johansson;Mila Kunis;Jennifer Lawrence",
        "Punkte": 300
    },
    {
        "Kategorie": "Film und Fernsehen",
        "Frage": "Welcher Film gewann 1994 den Oscar für den besten Film und handelt von einem einfachen Mann, der außergewöhnliche Abenteuer erlebt?",
        "Antwort": "Forrest Gump",
        "Tipp": "In diesem Film sagt der Protagonist: 'Das Leben ist wie eine Schachtel Pralinen.'",
        "Optionen": "Forrest Gump;Pulp Fiction;Die Verurteilten;Der König der Löwen",
        "Punkte": 400
    },
    {
        "Kategorie": "Film und Fernsehen",
        "Frage": "Welcher Regisseur drehte den Science-Fiction-Film 'Inception', der sich mit der Manipulation von Träumen beschäftigt?",
        "Antwort": "Christopher Nolan",
        "Tipp": "Er ist auch für die 'Dark Knight'-Trilogie bekannt.",
        "Optionen": "Christopher Nolan;Ridley Scott;Denis Villeneuve;James Cameron",
        "Punkte": 400
    },
    {
        "Kategorie": "Film und Fernsehen",
        "Frage": "Welche TV-Serie handelt von einem rätselhaften Mordfall in der Kleinstadt Twin Peaks?",
        "Antwort": "Twin Peaks",
        "Tipp": "Diese Serie wurde von David Lynch geschaffen.",
        "Optionen": "Twin Peaks;True Detective;Fargo;Mindhunter",
        "Punkte": 400
    },
    {
        "Kategorie": "Film und Fernsehen",
        "Frage": "Welcher Schauspieler spielte den Joker in 'The Dark Knight' und gewann posthum einen Oscar für seine Darstellung?",
        "Antwort": "Heath Ledger",
        "Tipp": "Dieser Schauspieler starb kurz nach den Dreharbeiten zu diesem Film.",
        "Optionen": "Heath Ledger;Joaquin Phoenix;Jack Nicholson;Jared Leto",
        "Punkte": 100
    },
    {
        "Kategorie": "Film und Fernsehen",
        "Frage": "Welche Serie aus den 1990er Jahren handelt von sechs Freunden, die in New York leben?",
        "Antwort": "Friends",
        "Tipp": "Diese Serie machte Schauspieler wie Jennifer Aniston und Courteney Cox berühmt.",
        "Optionen": "Friends;Seinfeld;How I Met Your Mother;The Big Bang Theory",
        "Punkte": 200
    },
    {
        "Kategorie": "Film und Fernsehen",
        "Frage": "In welchem Film von Ridley Scott kämpft der Gladiator Maximus gegen das Römische Reich?",
        "Antwort": "Gladiator",
        "Tipp": "Dieser Film gewann den Oscar für den besten Film im Jahr 2000.",
        "Optionen": "Gladiator;Ben Hur;300;Spartacus",
        "Punkte": 300
    },
    {
        "Kategorie": "Film und Fernsehen",
        "Frage": "Welche Science-Fiction-Serie spielt in einer Zukunft, in der die Menschheit von zylonenähnlichen Robotern bedroht wird?",
        "Antwort": "Battlestar Galactica",
        "Tipp": "Diese Serie wurde in den 1970er Jahren gestartet und 2004 neu aufgelegt.",
        "Optionen": "Battlestar Galactica;Stargate SG-1;Doctor Who;Star Trek",
        "Punkte": 400
    },
    {
        "Kategorie": "Film und Fernsehen",
        "Frage": "Welcher Film aus dem Jahr 1997 handelt von einem Schiff, das im Atlantik sinkt?",
        "Antwort": "Titanic",
        "Tipp": "Dieser Film wurde von James Cameron inszeniert und gewann 11 Oscars.",
        "Optionen": "Titanic;Das Boot;Poseidon;Perfect Storm",
        "Punkte": 100
    },
    {
        "Kategorie": "Film und Fernsehen",
        "Frage": "Welche Serie folgt den Abenteuern eines Chemielehrers, der zum Meth-Koch wird?",
        "Antwort": "Breaking Bad",
        "Tipp": "Die Serie wurde von Vince Gilligan erstellt und spielt in Albuquerque.",
        "Optionen": "Breaking Bad;The Wire;Ozark;Better Call Saul",
        "Punkte": 100
    },
    {
        "Kategorie": "Film und Fernsehen",
        "Frage": "Welcher Film zeigt das Leben von Forrest Gump, einem einfachen Mann mit einem bemerkenswerten Leben?",
        "Antwort": "Forrest Gump",
        "Tipp": "In diesem Film sagt der Hauptcharakter: 'Das Leben ist wie eine Schachtel Pralinen.'",
        "Optionen": "Forrest Gump;Rain Man;Der Pate;Good Will Hunting",
        "Punkte": 100
    },
    {
        "Kategorie": "Film und Fernsehen",
        "Frage": "Welcher Film von Ridley Scott spielt in der Zukunft und handelt von Replikanten, die auf der Erde gejagt werden?",
        "Antwort": "Blade Runner",
        "Tipp": "Dieser Film basiert auf einem Roman von Philip K. Dick.",
        "Optionen": "Blade Runner;Alien;Total Recall;Minority Report",
        "Punkte": 200
    },
    {
        "Kategorie": "Film und Fernsehen",
        "Frage": "In welcher Science-Fiction-Filmreihe spielt Sigourney Weaver die Hauptrolle als Ellen Ripley?",
        "Antwort": "Alien",
        "Tipp": "Der erste Film der Serie wurde 1979 veröffentlicht.",
        "Optionen": "Alien;Terminator;Predator;Jurassic Park",
        "Punkte": 200
    },
    {
        "Kategorie": "Film und Fernsehen",
        "Frage": "Welche Serie handelt von einer Gruppe von Überlebenden, die auf einer mysteriösen Insel gestrandet sind?",
        "Antwort": "Lost",
        "Tipp": "Diese Serie wurde von J.J. Abrams, Damon Lindelof und Jeffrey Lieber geschaffen.",
        "Optionen": "Lost;The 100;The Walking Dead;Survivor",
        "Punkte": 200
    },
    {
        "Kategorie": "Film und Fernsehen",
        "Frage": "Welche Filmreihe von Peter Jackson basiert auf den Büchern von J.R.R. Tolkien?",
        "Antwort": "Der Herr der Ringe",
        "Tipp": "Diese Trilogie umfasst die Filme 'Die Gefährten', 'Die zwei Türme' und 'Die Rückkehr des Königs'.",
        "Optionen": "Der Herr der Ringe;Der Hobbit;Harry Potter;Die Chroniken von Narnia",
        "Punkte": 300
    },
    {
        "Kategorie": "Film und Fernsehen",
        "Frage": "Welche TV-Serie zeigt das Leben von Don Draper, einem Werbefachmann im New York der 1960er Jahre?",
        "Antwort": "Mad Men",
        "Tipp": "Diese Serie wurde von Matthew Weiner geschaffen.",
        "Optionen": "Mad Men;The Sopranos;Boardwalk Empire;The Americans",
        "Punkte": 300
    },
    {
        "Kategorie": "Film und Fernsehen",
        "Frage": "Welcher Charakter aus der 'Star Wars'-Reihe ist der Meister von Yoda?",
        "Antwort": "Meister Yoda hat keinen bekannten Meister",
        "Tipp": "Yoda ist ein weiser Jedi-Meister, aber sein Meister wird nicht in den Filmen erwähnt.",
        "Optionen": "Meister Yoda hat keinen bekannten Meister;Obi-Wan Kenobi;Mace Windu;Qui-Gon Jinn",
        "Punkte": 300
    },
    {
        "Kategorie": "Film und Fernsehen",
        "Frage": "Welcher Filmregisseur ist für die Filme 'Pulp Fiction', 'Reservoir Dogs' und 'Inglourious Basterds' bekannt?",
        "Antwort": "Quentin Tarantino",
        "Tipp": "Seine Filme sind bekannt für ihren scharfen Dialog und ihre nichtlineare Erzählweise.",
        "Optionen": "Quentin Tarantino;Martin Scorsese;Steven Spielberg;Francis Ford Coppola",
        "Punkte": 400
    },
    {
        "Kategorie": "Film und Fernsehen",
        "Frage": "In welchem Jahr wurde der erste 'Star Wars'-Film veröffentlicht?",
        "Antwort": "1977",
        "Tipp": "Dieser Film wurde später als 'Episode IV: Eine neue Hoffnung' bekannt.",
        "Optionen": "1977;1980;1983;1975",
        "Punkte": 400
    },
    {
        "Kategorie": "Film und Fernsehen",
        "Frage": "Welche Serie wurde von David Benioff und D.B. Weiss produziert und basiert auf den Büchern von George R.R. Martin?",
        "Antwort": "Game of Thrones",
        "Tipp": "Diese Serie spielt in der fiktiven Welt von Westeros und Essos.",
        "Optionen": "Game of Thrones;Westworld;The Witcher;Vikings",
        "Punkte": 400
    },
    {
        "Kategorie": "Film und Fernsehen",
        "Frage": "Welcher Filmregisseur inszenierte die Filmreihe 'Indiana Jones'?",
        "Antwort": "Steven Spielberg",
        "Tipp": "Dieser Regisseur ist auch für Filme wie 'Der weiße Hai' und 'E.T.' bekannt.",
        "Optionen": "Steven Spielberg;George Lucas;James Cameron;Peter Jackson",
        "Punkte": 100
    },
    {
        "Kategorie": "Film und Fernsehen",
        "Frage": "Welcher Film aus dem Jahr 1994 zeigt die kriminellen Verstrickungen von Vincent Vega und Jules Winnfield?",
        "Antwort": "Pulp Fiction",
        "Tipp": "Dieser Film wurde von Quentin Tarantino inszeniert.",
        "Optionen": "Pulp Fiction;Reservoir Dogs;Goodfellas;Heat",
        "Punkte": 200
    },
    {
        "Kategorie": "Film und Fernsehen",
        "Frage": "In welchem Film von Christopher Nolan spielt Leonardo DiCaprio einen Dieb, der in die Träume von Menschen eindringt?",
        "Antwort": "Inception",
        "Tipp": "Dieser Film beschäftigt sich mit der Manipulation von Träumen.",
        "Optionen": "Inception;The Prestige;Shutter Island;Interstellar",
        "Punkte": 300
    },
    {
        "Kategorie": "Film und Fernsehen",
        "Frage": "Welche TV-Serie zeigt einen britischen Geheimagenten, der in einer Stadt gefangen ist, aus der es kein Entkommen gibt?",
        "Antwort": "The Prisoner",
        "Tipp": "Diese Serie stammt aus den 1960er Jahren und wurde von Patrick McGoohan kreiert.",
        "Optionen": "The Prisoner;The Avengers;Mission: Impossible;The Saint",
        "Punkte": 400
    },
    {
        "Kategorie": "Sport",
        "Frage": "Welcher Sportler ist bekannt als 'King of Football' und gewann drei Weltmeisterschaften mit Brasilien?",
        "Antwort": "Pelé",
        "Tipp": "Dieser Spieler trug die Rückennummer 10.",
        "Optionen": "Pelé;Diego Maradona;Zinedine Zidane;Lionel Messi",
        "Punkte": 100
    },
    {
        "Kategorie": "Sport",
        "Frage": "Welche Sportart wird mit einem Ball und einem Schläger auf einem Rasenplatz gespielt und hat vier Grand-Slam-Turniere?",
        "Antwort": "Tennis",
        "Tipp": "Diese Sportart umfasst Turniere wie Wimbledon und die US Open.",
        "Optionen": "Tennis;Golf;Cricket;Baseball",
        "Punkte": 100
    },
    {
        "Kategorie": "Sport",
        "Frage": "Welche Nation hat die meisten Goldmedaillen in der Geschichte der Olympischen Winterspiele gewonnen?",
        "Antwort": "Norwegen",
        "Tipp": "Dieses Land ist auch bekannt für seine Erfolge im Skilanglauf.",
        "Optionen": "Norwegen;Kanada;Deutschland;USA",
        "Punkte": 100
    },
    {
        "Kategorie": "Sport",
        "Frage": "Welcher Fußballverein hat die meisten UEFA Champions League Titel gewonnen?",
        "Antwort": "Real Madrid",
        "Tipp": "Dieser spanische Verein ist für seine weiße Trikotfarbe bekannt.",
        "Optionen": "Real Madrid;AC Milan;FC Barcelona;Bayern München",
        "Punkte": 200
    },
    {
        "Kategorie": "Sport",
        "Frage": "Welcher Sportler hält den Weltrekord im 100-Meter-Sprint?",
        "Antwort": "Usain Bolt",
        "Tipp": "Dieser jamaikanische Sprinter wird auch 'Lightning Bolt' genannt.",
        "Optionen": "Usain Bolt;Carl Lewis;Michael Johnson;Tyson Gay",
        "Punkte": 200
    },
    {
        "Kategorie": "Sport",
        "Frage": "Welche Sportart wird in den USA als 'America's Pastime' bezeichnet?",
        "Antwort": "Baseball",
        "Tipp": "Diese Sportart wird mit einem Schläger, Ball und Handschuh gespielt.",
        "Optionen": "Baseball;American Football;Basketball;Eishockey",
        "Punkte": 200
    },
    {
        "Kategorie": "Sport",
        "Frage": "Welche Radrennfahrt gilt als das prestigeträchtigste Etappenrennen im Straßenradsport?",
        "Antwort": "Tour de France",
        "Tipp": "Dieses Rennen endet traditionell auf den Champs-Élysées in Paris.",
        "Optionen": "Tour de France;Giro d'Italia;Vuelta a España;Paris-Roubaix",
        "Punkte": 300
    },
    {
        "Kategorie": "Sport",
        "Frage": "Welche Basketballmannschaft hat die meisten NBA-Meisterschaften gewonnen?",
        "Antwort": "Boston Celtics",
        "Tipp": "Dieses Team hat eine intensive Rivalität mit den Los Angeles Lakers.",
        "Optionen": "Boston Celtics;Los Angeles Lakers;Chicago Bulls;Golden State Warriors",
        "Punkte": 300
    },
    {
        "Kategorie": "Sport",
        "Frage": "Welcher Boxer war als 'The Greatest' bekannt und wurde dreimal Weltmeister im Schwergewicht?",
        "Antwort": "Muhammad Ali",
        "Tipp": "Er wurde als Cassius Clay geboren.",
        "Optionen": "Muhammad Ali;Mike Tyson;George Foreman;Joe Frazier",
        "Punkte": 300
    },
    {
        "Kategorie": "Sport",
        "Frage": "Welche Mannschaft gewann die FIFA-Weltmeisterschaft 2018?",
        "Antwort": "Frankreich",
        "Tipp": "Dieses Team besiegte Kroatien im Finale.",
        "Optionen": "Frankreich;Deutschland;Brasilien;Argentinien",
        "Punkte": 400
    },
    {
        "Kategorie": "Sport",
        "Frage": "Welcher Tennisspieler hält den Rekord für die meisten Grand-Slam-Einzeltitel bei den Herren?",
        "Antwort": "Roger Federer",
        "Tipp": "Dieser Schweizer Spieler hat 20 Grand-Slam-Titel gewonnen.",
        "Optionen": "Roger Federer;Rafael Nadal;Novak Djokovic;Pete Sampras",
        "Punkte": 400
    },
    {
        "Kategorie": "Sport",
        "Frage": "In welcher Sportart wird der Davis Cup ausgetragen?",
        "Antwort": "Tennis",
        "Tipp": "Dieser Wettbewerb ist das größte jährliche internationale Mannschaftsturnier im Tennis.",
        "Optionen": "Tennis;Golf;Rugby;Badminton",
        "Punkte": 400
    },
    {
        "Kategorie": "Sport",
        "Frage": "Welche Nation gewann die erste FIFA-Weltmeisterschaft im Jahr 1930?",
        "Antwort": "Uruguay",
        "Tipp": "Das Finale fand in Montevideo statt.",
        "Optionen": "Uruguay;Argentinien;Italien;Brasilien",
        "Punkte": 100
    },
    {
        "Kategorie": "Sport",
        "Frage": "Welche Stadt war Gastgeber der Olympischen Sommerspiele 2012?",
        "Antwort": "London",
        "Tipp": "Diese Stadt war auch Gastgeber der Spiele im Jahr 1948.",
        "Optionen": "London;Peking;Sydney;Athen",
        "Punkte": 200
    },
    {
        "Kategorie": "Sport",
        "Frage": "In welcher Sportart gibt es Disziplinen wie Slalom, Riesenslalom und Super-G?",
        "Antwort": "Ski Alpin",
        "Tipp": "Diese Disziplinen gehören zu den alpinen Skirennen.",
        "Optionen": "Ski Alpin;Snowboard;Biathlon;Langlauf",
        "Punkte": 300
    },
    {
        "Kategorie": "Sport",
        "Frage": "Welcher Golfer hat die meisten Major-Turniere gewonnen?",
        "Antwort": "Jack Nicklaus",
        "Tipp": "Er wird oft als 'The Golden Bear' bezeichnet.",
        "Optionen": "Jack Nicklaus;Tiger Woods;Arnold Palmer;Gary Player",
        "Punkte": 400
    },
    {
        "Kategorie": "Sport",
        "Frage": "In welcher Sportart wird der Ball mit der Hand geschlagen und es gibt ein Netz in der Mitte?",
        "Antwort": "Volleyball",
        "Tipp": "Diese Sportart wird oft am Strand gespielt.",
        "Optionen": "Volleyball;Badminton;Tennis;Squash",
        "Punkte": 100
    },
    {
        "Kategorie": "Sport",
        "Frage": "Welcher Fußballer wird oft als 'der Kaiser' bezeichnet?",
        "Antwort": "Franz Beckenbauer",
        "Tipp": "Er war Spieler und Trainer der deutschen Nationalmannschaft.",
        "Optionen": "Franz Beckenbauer;Gerd Müller;Lothar Matthäus;Johan Cruyff",
        "Punkte": 100
    },
    {
        "Kategorie": "Sport",
        "Frage": "Welche Formel 1-Legende ist siebenmaliger Weltmeister?",
        "Antwort": "Michael Schumacher",
        "Tipp": "Er gewann die meisten seiner Titel mit Ferrari.",
        "Optionen": "Michael Schumacher;Ayrton Senna;Lewis Hamilton;Alain Prost",
        "Punkte": 100
    },
    {
        "Kategorie": "Sport",
        "Frage": "Welche Mannschaft gewann die FIFA-Weltmeisterschaft der Frauen 2019?",
        "Antwort": "USA",
        "Tipp": "Dieses Team besiegte die Niederlande im Finale.",
        "Optionen": "USA;Deutschland;Frankreich;Japan",
        "Punkte": 200
    },
    {
        "Kategorie": "Sport",
        "Frage": "In welcher Stadt fanden die Olympischen Winterspiele 1994 statt?",
        "Antwort": "Lillehammer",
        "Tipp": "Diese Stadt liegt in Norwegen.",
        "Optionen": "Lillehammer;Nagano;Salt Lake City;Albertville",
        "Punkte": 200
    },
    {
        "Kategorie": "Sport",
        "Frage": "Welcher amerikanische Schwimmer gewann acht Goldmedaillen bei den Olympischen Spielen 2008?",
        "Antwort": "Michael Phelps",
        "Tipp": "Er ist der erfolgreichste Olympionike aller Zeiten.",
        "Optionen": "Michael Phelps;Ryan Lochte;Mark Spitz;Ian Thorpe",
        "Punkte": 200
    },
    {
        "Kategorie": "Sport",
        "Frage": "Welcher Boxer gewann die 'Rumble in the Jungle' gegen George Foreman?",
        "Antwort": "Muhammad Ali",
        "Tipp": "Dieser Kampf fand 1974 in Zaire statt.",
        "Optionen": "Muhammad Ali;Joe Frazier;George Foreman;Larry Holmes",
        "Punkte": 300
    },
    {
        "Kategorie": "Sport",
        "Frage": "Welche Nationalmannschaft gewann die erste Rugby-Weltmeisterschaft 1987?",
        "Antwort": "Neuseeland",
        "Tipp": "Dieses Team ist auch als die 'All Blacks' bekannt.",
        "Optionen": "Neuseeland;Australien;England;Südafrika",
        "Punkte": 300
    },
    {
        "Kategorie": "Sport",
        "Frage": "Welcher Golfspieler gewann 2019 das Masters in Augusta nach einer langen Verletzungspause?",
        "Antwort": "Tiger Woods",
        "Tipp": "Dieser Sieg markierte sein Comeback auf höchstem Niveau.",
        "Optionen": "Tiger Woods;Phil Mickelson;Rory McIlroy;Brooks Koepka",
        "Punkte": 300
    },
    {
        "Kategorie": "Sport",
        "Frage": "Welche Nation hat die meisten Medaillen bei den Olympischen Spielen in der Leichtathletik gewonnen?",
        "Antwort": "USA",
        "Tipp": "Dieses Land dominiert insbesondere Sprint- und Feldwettbewerbe.",
        "Optionen": "USA;Jamaika;Sowjetunion;Großbritannien",
        "Punkte": 400
    },
    {
        "Kategorie": "Sport",
        "Frage": "Welcher Spieler hält den Rekord für die meisten Tore in der Fußball-Bundesliga?",
        "Antwort": "Gerd Müller",
        "Tipp": "Er spielte den Großteil seiner Karriere für Bayern München.",
        "Optionen": "Gerd Müller;Robert Lewandowski;Klaus Fischer;Uwe Seeler",
        "Punkte": 400
    },
    {
        "Kategorie": "Sport",
        "Frage": "In welcher Sportart sind Simona Halep und Rafael Nadal prominente Namen?",
        "Antwort": "Tennis",
        "Tipp": "Diese Spieler haben Grand-Slam-Turniere auf Sandplätzen gewonnen.",
        "Optionen": "Tennis;Badminton;Tischtennis;Squash",
        "Punkte": 400
    },
    {
        "Kategorie": "Sport",
        "Frage": "In welchem Sport gibt es die Techniken 'Eisengriff', 'Ouchi Gari' und 'Seoi Nage'?",
        "Antwort": "Judo",
        "Tipp": "Dieser Kampfsport stammt aus Japan.",
        "Optionen": "Judo;Karate;Taekwondo;Jiu-Jitsu",
        "Punkte": 100
    },
    {
        "Kategorie": "Sport",
        "Frage": "Welche Nation gewann die FIFA-Weltmeisterschaft 1958, als Pelé erstmals international berühmt wurde?",
        "Antwort": "Brasilien",
        "Tipp": "Dieses Land hat die meisten Weltmeistertitel gewonnen.",
        "Optionen": "Brasilien;Deutschland;Argentinien;Italien",
        "Punkte": 200
    },
    {
        "Kategorie": "Sport",
        "Frage": "Welcher Tennisspieler gewann die US Open 2020 und wurde damit die jüngste Nr. 1 der Welt bei den Herren?",
        "Antwort": "Daniil Medvedev",
        "Tipp": "Dieser Spieler kommt aus Russland.",
        "Optionen": "Daniil Medvedev;Dominic Thiem;Alexander Zverev;Stefanos Tsitsipas",
        "Punkte": 300
    },
    {
        "Kategorie": "Sport",
        "Frage": "In welcher Sportart tritt man in Disziplinen wie 'Sprint', 'Zeitfahren' und 'Verfolgung' an?",
        "Antwort": "Bahnradsport",
        "Tipp": "Diese Disziplinen werden auf einer speziell gebauten ovalen Bahn ausgetragen.",
        "Optionen": "Bahnradsport;Triathlon;Leichtathletik;Langlauf",
        "Punkte": 400
    },
    {
        "Kategorie": "Musik",
        "Frage": "Welcher Komponist schrieb die 'Fünfte Symphonie' mit dem berühmten viernotigen 'Schicksalsmotiv'?",
        "Antwort": "Ludwig van Beethoven",
        "Tipp": "Dieser Komponist verlor sein Gehör, komponierte aber weiterhin meisterhafte Werke.",
        "Optionen": "Ludwig van Beethoven;Wolfgang Amadeus Mozart;Johann Sebastian Bach;Franz Schubert",
        "Punkte": 100
    },
    {
        "Kategorie": "Musik",
        "Frage": "Welcher britische Sänger ist bekannt für Hits wie 'Shape of You' und 'Perfect'?",
        "Antwort": "Ed Sheeran",
        "Tipp": "Dieser Künstler hat rotes Haar und spielt häufig Gitarre.",
        "Optionen": "Ed Sheeran;Sam Smith;Adele;Harry Styles",
        "Punkte": 100
    },
    {
        "Kategorie": "Musik",
        "Frage": "Welche Band veröffentlichte das Album 'Abbey Road' mit dem berühmten Zebrastreifen-Cover?",
        "Antwort": "The Beatles",
        "Tipp": "Diese Band besteht aus John, Paul, George und Ringo.",
        "Optionen": "The Beatles;The Rolling Stones;The Who;Pink Floyd",
        "Punkte": 100
    },
    {
        "Kategorie": "Musik",
        "Frage": "Welcher US-amerikanische Musiker ist bekannt für den Hit 'Purple Rain'?",
        "Antwort": "Prince",
        "Tipp": "Dieser Künstler war auch als 'The Artist' bekannt.",
        "Optionen": "Prince;Michael Jackson;Stevie Wonder;Jimi Hendrix",
        "Punkte": 200
    },
    {
        "Kategorie": "Musik",
        "Frage": "Welche Pop-Ikone veröffentlichte das Album 'Like a Virgin'?",
        "Antwort": "Madonna",
        "Tipp": "Sie ist auch als die 'Queen of Pop' bekannt.",
        "Optionen": "Madonna;Whitney Houston;Cyndi Lauper;Cher",
        "Punkte": 200
    },
    {
        "Kategorie": "Musik",
        "Frage": "Welche Band wurde mit dem Song 'Smells Like Teen Spirit' bekannt?",
        "Antwort": "Nirvana",
        "Tipp": "Diese Band war führend in der Grunge-Bewegung.",
        "Optionen": "Nirvana;Pearl Jam;Soundgarden;Alice in Chains",
        "Punkte": 200
    },
    {
        "Kategorie": "Musik",
        "Frage": "Welcher Komponist schuf die Oper 'Die Zauberflöte'?",
        "Antwort": "Wolfgang Amadeus Mozart",
        "Tipp": "Diese Oper enthält die berühmte 'Arie der Königin der Nacht'.",
        "Optionen": "Wolfgang Amadeus Mozart;Giuseppe Verdi;Richard Wagner;Johann Strauss",
        "Punkte": 300
    },
    {
        "Kategorie": "Musik",
        "Frage": "Welche Rockband veröffentlichte das Album 'The Dark Side of the Moon'?",
        "Antwort": "Pink Floyd",
        "Tipp": "Dieses Album ist für seine innovativen Studioeffekte und langen Instrumentalpassagen bekannt.",
        "Optionen": "Pink Floyd;Led Zeppelin;Queen;Deep Purple",
        "Punkte": 300
    },
    {
        "Kategorie": "Musik",
        "Frage": "Wer schrieb und komponierte die Oper 'Carmen'?",
        "Antwort": "Georges Bizet",
        "Tipp": "Diese Oper spielt in Spanien und erzählt die Geschichte einer verführerischen Zigeunerin.",
        "Optionen": "Georges Bizet;Giuseppe Verdi;Giacomo Puccini;Richard Wagner",
        "Punkte": 300
    },
    {
        "Kategorie": "Musik",
        "Frage": "Welche britische Band veröffentlichte das Album 'OK Computer'?",
        "Antwort": "Radiohead",
        "Tipp": "Dieses Album gilt als eines der besten Alben der 1990er Jahre.",
        "Optionen": "Radiohead;Blur;Oasis;The Verve",
        "Punkte": 400
    },
    {
        "Kategorie": "Musik",
        "Frage": "Welche deutsche elektronische Band ist für den Song 'Autobahn' bekannt?",
        "Antwort": "Kraftwerk",
        "Tipp": "Diese Band gilt als Pionier der elektronischen Musik.",
        "Optionen": "Kraftwerk;Tangerine Dream;Can;Neu!",
        "Punkte": 400
    },
    {
        "Kategorie": "Musik",
        "Frage": "Welcher Komponist schrieb die Oper 'Der Ring des Nibelungen'?",
        "Antwort": "Richard Wagner",
        "Tipp": "Dieses Werk ist ein Zyklus aus vier Opern.",
        "Optionen": "Richard Wagner;Ludwig van Beethoven;Giuseppe Verdi;Wolfgang Amadeus Mozart",
        "Punkte": 400
    },
    {
        "Kategorie": "Musik",
        "Frage": "Welche Sängerin ist bekannt für den Hit 'Rolling in the Deep'?",
        "Antwort": "Adele",
        "Tipp": "Diese britische Sängerin gewann mehrere Grammys für ihr Album '21'.",
        "Optionen": "Adele;Beyoncé;Rihanna;Taylor Swift",
        "Punkte": 100
    },
    {
        "Kategorie": "Musik",
        "Frage": "Welcher Komponist ist bekannt für seine 'Ungarischen Tänze'?",
        "Antwort": "Johannes Brahms",
        "Tipp": "Diese Tänze basieren auf ungarischen Volksmelodien.",
        "Optionen": "Johannes Brahms;Franz Liszt;Antonín Dvořák;Béla Bartók",
        "Punkte": 200
    },
    {
        "Kategorie": "Musik",
        "Frage": "Welcher Jazz-Saxophonist veröffentlichte das Album 'A Love Supreme'?",
        "Antwort": "John Coltrane",
        "Tipp": "Dieses Album gilt als eines der Meisterwerke des Jazz.",
        "Optionen": "John Coltrane;Miles Davis;Charlie Parker;Thelonious Monk",
        "Punkte": 300
    },
    {
        "Kategorie": "Musik",
        "Frage": "Welche US-amerikanische Sängerin und Schauspielerin veröffentlichte das Lied 'I Will Always Love You'?",
        "Antwort": "Whitney Houston",
        "Tipp": "Dieses Lied wurde für den Film 'Bodyguard' aufgenommen.",
        "Optionen": "Whitney Houston;Mariah Carey;Celine Dion;Barbra Streisand",
        "Punkte": 400
    },
    {
        "Kategorie": "Musik",
        "Frage": "Welche Popband veröffentlichte den Song 'Dancing Queen'?",
        "Antwort": "ABBA",
        "Tipp": "Diese schwedische Band wurde in den 1970er Jahren weltweit bekannt.",
        "Optionen": "ABBA;Bee Gees;The Beatles;Fleetwood Mac",
        "Punkte": 100
    },
    {
        "Kategorie": "Musik",
        "Frage": "Welcher Rapper und Produzent ist bekannt für das Album 'The Chronic'?",
        "Antwort": "Dr. Dre",
        "Tipp": "Er war Mitglied der Gruppe N.W.A. und gilt als Pionier des Westküsten-Rap.",
        "Optionen": "Dr. Dre;Snoop Dogg;Tupac Shakur;Ice Cube",
        "Punkte": 100
    },
    {
        "Kategorie": "Musik",
        "Frage": "Welcher Künstler ist bekannt für seine Rolle als Lead-Sänger der Band Queen?",
        "Antwort": "Freddie Mercury",
        "Tipp": "Er wurde in Sansibar geboren und ist bekannt für seine kraftvolle Stimme und Bühnenpräsenz.",
        "Optionen": "Freddie Mercury;David Bowie;Mick Jagger;Elton John",
        "Punkte": 100
    },
    {
        "Kategorie": "Musik",
        "Frage": "Welche Sängerin ist bekannt für den Song 'Material Girl'?",
        "Antwort": "Madonna",
        "Tipp": "Diese Künstlerin wird oft als die 'Queen of Pop' bezeichnet.",
        "Optionen": "Madonna;Cyndi Lauper;Whitney Houston;Janet Jackson",
        "Punkte": 200
    },
    {
        "Kategorie": "Musik",
        "Frage": "Welche britische Rockband veröffentlichte das Album 'Led Zeppelin IV', das den Song 'Stairway to Heaven' enthält?",
        "Antwort": "Led Zeppelin",
        "Tipp": "Diese Band wurde von Jimmy Page gegründet.",
        "Optionen": "Led Zeppelin;The Who;Pink Floyd;Deep Purple",
        "Punkte": 200
    },
    {
        "Kategorie": "Musik",
        "Frage": "Welcher Sänger ist bekannt für seine Hits 'Rocket Man' und 'Your Song'?",
        "Antwort": "Elton John",
        "Tipp": "Dieser Künstler trägt oft extravagante Brillen und Outfits.",
        "Optionen": "Elton John;David Bowie;Billy Joel;Rod Stewart",
        "Punkte": 200
    },
    {
        "Kategorie": "Musik",
        "Frage": "Welche Sängerin veröffentlichte 2011 das erfolgreiche Album '21'?",
        "Antwort": "Adele",
        "Tipp": "Dieses Album enthält Hits wie 'Rolling in the Deep' und 'Someone Like You'.",
        "Optionen": "Adele;Beyoncé;Rihanna;Taylor Swift",
        "Punkte": 300
    },
    {
        "Kategorie": "Musik",
        "Frage": "Welcher Komponist ist bekannt für die 'Brandenburgischen Konzerte'?",
        "Antwort": "Johann Sebastian Bach",
        "Tipp": "Dieser deutsche Komponist gilt als einer der größten Komponisten des Barock.",
        "Optionen": "Johann Sebastian Bach;Antonio Vivaldi;Georg Friedrich Händel;Johann Pachelbel",
        "Punkte": 300
    },
    {
        "Kategorie": "Musik",
        "Frage": "Welche Band veröffentlichte den Song 'Bohemian Rhapsody'?",
        "Antwort": "Queen",
        "Tipp": "Dieser Song wurde von Freddie Mercury geschrieben.",
        "Optionen": "Queen;The Rolling Stones;The Beatles;The Who",
        "Punkte": 300
    },
    {
        "Kategorie": "Musik",
        "Frage": "Welcher Pianist und Komponist schrieb das Werk 'Kinderszenen'?",
        "Antwort": "Robert Schumann",
        "Tipp": "Dieses Werk enthält das berühmte Stück 'Träumerei'.",
        "Optionen": "Robert Schumann;Frédéric Chopin;Franz Schubert;Johannes Brahms",
        "Punkte": 400
    },
    {
        "Kategorie": "Musik",
        "Frage": "Welche Oper von Giuseppe Verdi basiert auf der Geschichte der ägyptischen Prinzessin Aida?",
        "Antwort": "Aida",
        "Tipp": "Diese Oper erzählt die Geschichte einer tragischen Liebe zwischen Aida und Radames.",
        "Optionen": "Aida;La Traviata;Nabucco;Rigoletto",
        "Punkte": 400
    },
    {
        "Kategorie": "Musik",
        "Frage": "Welcher Jazz-Pianist und Komponist schrieb das Stück 'Round Midnight'?",
        "Antwort": "Thelonious Monk",
        "Tipp": "Dieser Künstler gilt als einer der Gründer des Bebop.",
        "Optionen": "Thelonious Monk;Duke Ellington;Miles Davis;Herbie Hancock",
        "Punkte": 400
    },
    {
        "Kategorie": "Musik",
        "Frage": "Welche Künstlerin ist bekannt für das Album 'Lemonade'?",
        "Antwort": "Beyoncé",
        "Tipp": "Dieses Album thematisiert Themen wie Untreue und Selbstermächtigung.",
        "Optionen": "Beyoncé;Rihanna;Alicia Keys;Lady Gaga",
        "Punkte": 100
    },
    {
        "Kategorie": "Musik",
        "Frage": "Welcher klassische Komponist schrieb die 'Unvollendete Symphonie'?",
        "Antwort": "Franz Schubert",
        "Tipp": "Diese Symphonie blieb unvollendet, da der Komponist früh verstarb.",
        "Optionen": "Franz Schubert;Ludwig van Beethoven;Franz Liszt;Anton Bruckner",
        "Punkte": 200
    },
    {
        "Kategorie": "Musik",
        "Frage": "Welche Band veröffentlichte das Album 'Nevermind', das den Song 'Smells Like Teen Spirit' enthält?",
        "Antwort": "Nirvana",
        "Tipp": "Dieses Album wird oft als Meilenstein des Grunge bezeichnet.",
        "Optionen": "Nirvana;Pearl Jam;Soundgarden;Alice in Chains",
        "Punkte": 300
    },
    {
        "Kategorie": "Musik",
        "Frage": "Welcher französische Komponist ist bekannt für sein Werk 'Clair de Lune'?",
        "Antwort": "Claude Debussy",
        "Tipp": "Dieses Stück ist Teil der Suite 'Bergamasque'.",
        "Optionen": "Claude Debussy;Maurice Ravel;Gabriel Fauré;Camille Saint-Saëns",
        "Punkte": 400
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Welcher antike Philosoph war der Lehrer von Platon?",
        "Antwort": "Sokrates",
        "Tipp": "Er ist bekannt für seine Methode des Dialogs und der Befragung.",
        "Optionen": "Sokrates;Aristoteles;Heraklit;Epikur",
        "Punkte": 100
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Welcher Philosoph ist bekannt für den Satz 'Ich denke, also bin ich'?",
        "Antwort": "René Descartes",
        "Tipp": "Dieser Satz ist der Ausgangspunkt des Rationalismus.",
        "Optionen": "René Descartes;Immanuel Kant;John Locke;David Hume",
        "Punkte": 100
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Welcher deutsche Philosoph schrieb 'Also sprach Zarathustra'?",
        "Antwort": "Friedrich Nietzsche",
        "Tipp": "Dieser Philosoph prägte den Begriff 'Übermensch'.",
        "Optionen": "Friedrich Nietzsche;Arthur Schopenhauer;Karl Marx;G.W.F. Hegel",
        "Punkte": 100
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Welcher antike Philosoph gründete die Akademie in Athen?",
        "Antwort": "Platon",
        "Tipp": "Sein bekanntestes Werk ist 'Der Staat'.",
        "Optionen": "Platon;Aristoteles;Sokrates;Epikur",
        "Punkte": 100
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Welcher Philosoph entwickelte die Idee des Kategorischen Imperativs?",
        "Antwort": "Immanuel Kant",
        "Tipp": "Dieser deutsche Philosoph schrieb 'Die Kritik der reinen Vernunft'.",
        "Optionen": "Immanuel Kant;Georg Wilhelm Friedrich Hegel;Arthur Schopenhauer;Friedrich Nietzsche",
        "Punkte": 200
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Welcher Philosoph prägte den Satz 'Der Mensch ist dem Menschen ein Wolf'?",
        "Antwort": "Thomas Hobbes",
        "Tipp": "Dieser Satz beschreibt die Naturzustandstheorie in 'Leviathan'.",
        "Optionen": "Thomas Hobbes;John Locke;Jean-Jacques Rousseau;David Hume",
        "Punkte": 200
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Welcher Philosoph ist bekannt für seine 'Höhlengleichnis'?",
        "Antwort": "Platon",
        "Tipp": "Dieses Gleichnis ist Teil seines Werkes 'Der Staat'.",
        "Optionen": "Platon;Aristoteles;Sokrates;Heraklit",
        "Punkte": 200
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Wer gilt als der Begründer des Existentialismus?",
        "Antwort": "Jean-Paul Sartre",
        "Tipp": "Dieser französische Philosoph schrieb 'Das Sein und das Nichts'.",
        "Optionen": "Jean-Paul Sartre;Albert Camus;Martin Heidegger;Simone de Beauvoir",
        "Punkte": 200
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Welcher antike Philosoph entwickelte die Theorie der vier Ursachen?",
        "Antwort": "Aristoteles",
        "Tipp": "Diese Theorie umfasst die materielle, formale, effiziente und finale Ursache.",
        "Optionen": "Aristoteles;Platon;Demokrit;Pythagoras",
        "Punkte": 300
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Welcher deutsche Philosoph schrieb 'Die Phänomenologie des Geistes'?",
        "Antwort": "Georg Wilhelm Friedrich Hegel",
        "Tipp": "Er gilt als einer der bedeutendsten Vertreter des deutschen Idealismus.",
        "Optionen": "Georg Wilhelm Friedrich Hegel;Immanuel Kant;Arthur Schopenhauer;Friedrich Nietzsche",
        "Punkte": 300
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Welcher Philosoph entwickelte das Konzept des 'Willens zum Leben'?",
        "Antwort": "Arthur Schopenhauer",
        "Tipp": "Dieses Konzept ist zentral in seinem Hauptwerk 'Die Welt als Wille und Vorstellung'.",
        "Optionen": "Arthur Schopenhauer;Friedrich Nietzsche;Immanuel Kant;Martin Heidegger",
        "Punkte": 300
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Welcher Philosoph vertrat die These, dass 'der Mensch das Maß aller Dinge' ist?",
        "Antwort": "Protagoras",
        "Tipp": "Dieser Satz wird oft als Ausdruck des Relativismus interpretiert.",
        "Optionen": "Protagoras;Heraklit;Sokrates;Epikur",
        "Punkte": 300
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Welcher Philosoph entwickelte die Idee des 'Übermenschen' und 'ewigen Wiederkehr'?",
        "Antwort": "Friedrich Nietzsche",
        "Tipp": "Diese Konzepte sind zentral in seinem Werk 'Also sprach Zarathustra'.",
        "Optionen": "Friedrich Nietzsche;Arthur Schopenhauer;Martin Heidegger;Jean-Paul Sartre",
        "Punkte": 400
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Welcher Philosoph prägte den Begriff 'Wille zur Macht'?",
        "Antwort": "Friedrich Nietzsche",
        "Tipp": "Dieser Begriff ist ein Schlüsselkonzept in seinem Spätwerk.",
        "Optionen": "Friedrich Nietzsche;Arthur Schopenhauer;Georg Wilhelm Friedrich Hegel;Immanuel Kant",
        "Punkte": 400
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Welcher antike Philosoph war ein Schüler von Sokrates und Lehrer von Aristoteles?",
        "Antwort": "Platon",
        "Tipp": "Er schrieb Dialoge, in denen Sokrates oft die Hauptfigur ist.",
        "Optionen": "Platon;Epikur;Pythagoras;Heraklit",
        "Punkte": 400
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Welcher Philosoph ist bekannt für das Werk 'Sein und Zeit'?",
        "Antwort": "Martin Heidegger",
        "Tipp": "Dieses Werk ist ein zentraler Text des Existenzialismus und der Phänomenologie.",
        "Optionen": "Martin Heidegger;Jean-Paul Sartre;Edmund Husserl;Karl Jaspers",
        "Punkte": 400
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Welches Werk beschreibt eine utopische Gesellschaft auf einer Insel?",
        "Antwort": "Utopia",
        "Tipp": "Dieses Werk wurde von Thomas Morus verfasst.",
        "Optionen": "Utopia;Der Staat;Leviathan;Das Kapital",
        "Punkte": 100
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Was ist das zentrale Thema in Platons 'Höhlengleichnis'?",
        "Antwort": "Erkenntnis und Wirklichkeit",
        "Tipp": "Das Gleichnis behandelt die Frage, wie wir die Realität wahrnehmen.",
        "Optionen": "Erkenntnis und Wirklichkeit;Moral und Ethik;Staat und Gerechtigkeit;Macht und Herrschaft",
        "Punkte": 100
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Welche philosophische Strömung vertritt die Ansicht, dass das 'größte Glück der größten Zahl' das oberste Ziel ist?",
        "Antwort": "Utilitarismus",
        "Tipp": "Jeremy Bentham ist einer der Hauptvertreter dieser Lehre.",
        "Optionen": "Utilitarismus;Existentialismus;Stoizismus;Idealismus",
        "Punkte": 100
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Welcher Begriff beschreibt das Streben nach einem tugendhaften Leben gemäß der Natur, wie es die Stoiker predigten?",
        "Antwort": "Apathie",
        "Tipp": "Dieser Zustand ist das Ziel der stoischen Philosophie.",
        "Optionen": "Apathie;Ataraxie;Eudaimonia;Karthasis",
        "Punkte": 100
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Welcher Philosoph schrieb 'Zwei Abhandlungen über die Regierung', in denen er das Naturrecht und den Gesellschaftsvertrag thematisiert?",
        "Antwort": "John Locke",
        "Tipp": "Er gilt als Vater des Liberalismus.",
        "Optionen": "John Locke;Thomas Hobbes;Jean-Jacques Rousseau;David Hume",
        "Punkte": 200
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Welche philosophische Richtung legt Wert auf die Bedeutung des Individuums und das Erleben der Freiheit und Verantwortung?",
        "Antwort": "Existentialismus",
        "Tipp": "Jean-Paul Sartre ist einer der bekanntesten Vertreter dieser Richtung.",
        "Optionen": "Existentialismus;Rationalismus;Empirismus;Stoizismus",
        "Punkte": 200
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Was versteht man unter dem Begriff 'Tabula Rasa' in der Philosophie?",
        "Antwort": "Die Vorstellung, dass der Geist bei der Geburt leer ist",
        "Tipp": "Diese Idee wurde von John Locke geprägt.",
        "Optionen": "Die Vorstellung, dass der Geist bei der Geburt leer ist;Die Vorstellung von angeborenen Ideen;Die Vorstellung einer präexistenten Seele;Die Vorstellung des Unbewussten",
        "Punkte": 200
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Welche antike Philosophie strebte nach einem Leben im Einklang mit der Natur und sah Leidenschaft als Ursache für Leid?",
        "Antwort": "Stoizismus",
        "Tipp": "Seneca und Epiktet sind bekannte Vertreter dieser Lehre.",
        "Optionen": "Stoizismus;Epikureismus;Skeptizismus;Kynismus",
        "Punkte": 200
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Welches philosophische Konzept beschreibt die Vorstellung, dass alles, was existiert, aus einem grundlegenden Stoff oder Prinzip besteht?",
        "Antwort": "Monismus",
        "Tipp": "Diese Idee steht im Gegensatz zum Dualismus.",
        "Optionen": "Monismus;Dualismus;Pluralismus;Atomismus",
        "Punkte": 300
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Welche philosophische Bewegung des 20. Jahrhunderts betonte die Bedeutung der Sprache in der Analyse philosophischer Probleme?",
        "Antwort": "Sprachphilosophie",
        "Tipp": "Wittgenstein war ein bedeutender Vertreter dieser Bewegung.",
        "Optionen": "Sprachphilosophie;Existentialismus;Phänomenologie;Strukturalismus",
        "Punkte": 300
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Welcher antike Philosoph vertrat die Theorie der 'Ideenwelt', in der die wahre Realität existiert?",
        "Antwort": "Platon",
        "Tipp": "Diese Theorie beschreibt eine Welt der perfekten Formen oder Ideen.",
        "Optionen": "Platon;Aristoteles;Heraklit;Sokrates",
        "Punkte": 300
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Welche Philosophie befasst sich mit der Untersuchung von Wissen und begrifflichen Grundlagen?",
        "Antwort": "Epistemologie",
        "Tipp": "Diese Disziplin wird auch als Erkenntnistheorie bezeichnet.",
        "Optionen": "Epistemologie;Metaphysik;Ethik;Logik",
        "Punkte": 300
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Was ist das 'Ding an sich' in Kants Philosophie?",
        "Antwort": "Die Realität, wie sie unabhängig von der menschlichen Wahrnehmung existiert",
        "Tipp": "Dieses Konzept steht im Zentrum seiner Transzendentalen Ästhetik.",
        "Optionen": "Die Realität, wie sie unabhängig von der menschlichen Wahrnehmung existiert;Das moralische Gesetz;Die Erscheinung der Dinge;Die Vernunft",
        "Punkte": 400
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Welche philosophische Richtung glaubt an die Unbestimmbarkeit von Wahrheit und erkennt den ständigen Wandel von Wissen an?",
        "Antwort": "Skeptizismus",
        "Tipp": "Diese Richtung bezweifelt die Möglichkeit absoluter Erkenntnis.",
        "Optionen": "Skeptizismus;Relativismus;Positivismus;Absolutismus",
        "Punkte": 400
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Was versteht man unter 'Das Nichts' im Existenzialismus?",
        "Antwort": "Die Abwesenheit von Bedeutung und Zweck im Universum",
        "Tipp": "Jean-Paul Sartre hat diesen Begriff ausführlich behandelt.",
        "Optionen": "Die Abwesenheit von Bedeutung und Zweck im Universum;Das Unbewusste;Die Verneinung des Seins;Der Tod",
        "Punkte": 400
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Was bedeutet der Begriff 'Apollinisch' im Kontext von Nietzsche?",
        "Antwort": "Die Prinzipien von Ordnung, Rationalität und Harmonie",
        "Tipp": "Dieser Begriff steht im Gegensatz zum 'Dionysischen'.",
        "Optionen": "Die Prinzipien von Ordnung, Rationalität und Harmonie;Die Prinzipien des Chaos und der Ekstase;Die Moral des Sklaven;Der Wille zur Macht",
        "Punkte": 400
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Welche antike Philosophie lehrte, dass das höchste Gut die Lust ist, verstanden als Abwesenheit von Schmerz?",
        "Antwort": "Epikureismus",
        "Tipp": "Diese Philosophie wurde von Epikur begründet.",
        "Optionen": "Epikureismus;Stoizismus;Skeptizismus;Kynismus",
        "Punkte": 100
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Was versteht man unter 'Cogito ergo sum'?",
        "Antwort": "'Ich denke, also bin ich'",
        "Tipp": "Dieser Satz wurde von René Descartes formuliert.",
        "Optionen": "'Ich denke, also bin ich';'Wissen ist Macht';'Gerechtigkeit ist der Wille des Stärkeren';'Erkenne dich selbst'",
        "Punkte": 100
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Welche philosophische Richtung betont die Bedeutung der Sinneswahrnehmung als Grundlage der Erkenntnis?",
        "Antwort": "Empirismus",
        "Tipp": "John Locke ist ein wichtiger Vertreter dieser Richtung.",
        "Optionen": "Empirismus;Rationalismus;Idealismus;Existentialismus",
        "Punkte": 100
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Welche Philosophie beschäftigt sich mit den Grundfragen des Seins, der Existenz und der Wirklichkeit?",
        "Antwort": "Metaphysik",
        "Tipp": "Aristoteles schrieb ein bedeutendes Werk zu diesem Thema.",
        "Optionen": "Metaphysik;Ethik;Logik;Ästhetik",
        "Punkte": 100
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Welcher Philosoph schrieb 'Der Leviathan', in dem er die absolute Souveränität des Staates verteidigt?",
        "Antwort": "Thomas Hobbes",
        "Tipp": "Dieses Werk beschreibt den Naturzustand des Menschen als 'Krieg aller gegen alle'.",
        "Optionen": "Thomas Hobbes;John Locke;Jean-Jacques Rousseau;Niccolò Machiavelli",
        "Punkte": 200
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Welche antike Philosophie lehrte, dass man nach einem tugendhaften Leben streben soll, im Einklang mit der Natur?",
        "Antwort": "Stoizismus",
        "Tipp": "Diese Lehre wurde von Zenon von Kition begründet.",
        "Optionen": "Stoizismus;Epikureismus;Kynismus;Skeptizismus",
        "Punkte": 200
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Was bedeutet der Begriff 'Kategorischer Imperativ' in der Ethik von Immanuel Kant?",
        "Antwort": "Eine allgemeine Handlungsregel, die bedingungslos gilt",
        "Tipp": "Kant formulierte diesen Imperativ als grundlegendes Prinzip der Moral.",
        "Optionen": "Eine allgemeine Handlungsregel, die bedingungslos gilt;Eine Regel, die nur unter bestimmten Bedingungen gilt;Eine Regel, die auf persönlichen Präferenzen basiert;Ein Prinzip, das nur für bestimmte Personen gilt",
        "Punkte": 200
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Welche philosophische Richtung konzentriert sich auf die Untersuchung der Struktur und Bedeutung von Sprache?",
        "Antwort": "Analytische Philosophie",
        "Tipp": "Diese Richtung wird oft mit Ludwig Wittgenstein und Bertrand Russell in Verbindung gebracht.",
        "Optionen": "Analytische Philosophie;Phänomenologie;Existentialismus;Pragmatismus",
        "Punkte": 200
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Welches Werk beschreibt die Gesellschaft als eine 'unsichtbare Hand', die die Wirtschaft lenkt?",
        "Antwort": "Der Wohlstand der Nationen",
        "Tipp": "Dieses Werk wurde von Adam Smith verfasst.",
        "Optionen": "Der Wohlstand der Nationen;Das Kapital;Leviathan;Vom Gesellschaftsvertrag",
        "Punkte": 300
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Was beschreibt 'Die Dialektik' in der Philosophie von Hegel?",
        "Antwort": "Ein Prozess von These, Antithese und Synthese",
        "Tipp": "Dieser Prozess führt zur Entwicklung von Ideen und Erkenntnissen.",
        "Optionen": "Ein Prozess von These, Antithese und Synthese;Ein Prozess der logischen Deduktion;Ein Prozess der empirischen Beobachtung;Ein Prozess der ethischen Reflexion",
        "Punkte": 300
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Welche Philosophie betrachtet die Welt als eine Reihe von Interpretationen ohne zugrunde liegende Wahrheit?",
        "Antwort": "Relativismus",
        "Tipp": "Diese Philosophie betont die Subjektivität von Wahrnehmungen und Werten.",
        "Optionen": "Relativismus;Skeptizismus;Nihilismus;Positivismus",
        "Punkte": 300
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Welche Philosophie beschäftigt sich mit der Frage nach dem Guten und der richtigen Lebensweise?",
        "Antwort": "Ethik",
        "Tipp": "Aristoteles, Kant und Mill haben bedeutende Werke zu diesem Thema verfasst.",
        "Optionen": "Ethik;Metaphysik;Logik;Epistemologie",
        "Punkte": 300
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Was beschreibt 'Das Nichts' in der Philosophie des Existenzialismus?",
        "Antwort": "Die Abwesenheit von Bedeutung und Zweck im Universum",
        "Tipp": "Jean-Paul Sartre hat dieses Konzept ausführlich behandelt.",
        "Optionen": "Die Abwesenheit von Bedeutung und Zweck im Universum;Das Unbewusste;Die Verneinung des Seins;Der Tod",
        "Punkte": 400
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Was bedeutet der Begriff 'Dionysisch' im Kontext von Nietzsche?",
        "Antwort": "Die Prinzipien von Chaos, Ekstase und Kreativität",
        "Tipp": "Dieser Begriff steht im Gegensatz zum 'Apollinischen'.",
        "Optionen": "Die Prinzipien von Chaos, Ekstase und Kreativität;Die Prinzipien von Ordnung und Rationalität;Die Moral des Sklaven;Der Wille zur Macht",
        "Punkte": 400
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Welche antike Philosophie lehrte, dass das höchste Gut die Lust ist, verstanden als Abwesenheit von Schmerz?",
        "Antwort": "Epikureismus",
        "Tipp": "Diese Philosophie wurde von Epikur begründet.",
        "Optionen": "Epikureismus;Stoizismus;Skeptizismus;Kynismus",
        "Punkte": 400
    },
    {
        "Kategorie": "Philosophie",
        "Frage": "Welche Philosophie lehrt, dass alles Wissen aus der Erfahrung stammt und dass es keine angeborenen Ideen gibt?",
        "Antwort": "Empirismus",
        "Tipp": "John Locke und David Hume sind prominente Vertreter dieser Denkrichtung.",
        "Optionen": "Empirismus;Rationalismus;Idealismus;Pragmatismus",
        "Punkte": 400
    },
    {
        "Kategorie": "Politik",
        "Frage": "Welcher US-Präsident hielt die berühmte 'Gettysburg Address'?",
        "Antwort": "Abraham Lincoln",
        "Tipp": "Diese Rede wurde während des amerikanischen Bürgerkriegs gehalten.",
        "Optionen": "Abraham Lincoln;George Washington;Thomas Jefferson;Franklin D. Roosevelt",
        "Punkte": 100
    },
    {
        "Kategorie": "Politik",
        "Frage": "Welches Gremium ist das wichtigste Entscheidungsorgan der Vereinten Nationen?",
        "Antwort": "Der Sicherheitsrat",
        "Tipp": "Dieses Gremium hat fünf ständige Mitglieder mit Vetorecht.",
        "Optionen": "Der Sicherheitsrat;Die Generalversammlung;Der Internationale Gerichtshof;Das UN-Sekretariat",
        "Punkte": 100
    },
    {
        "Kategorie": "Politik",
        "Frage": "Welches Land hat die älteste noch in Kraft befindliche schriftliche Verfassung der Welt?",
        "Antwort": "Die Vereinigten Staaten",
        "Tipp": "Diese Verfassung wurde 1787 verabschiedet.",
        "Optionen": "Die Vereinigten Staaten;Großbritannien;Frankreich;Deutschland",
        "Punkte": 100
    },
    {
        "Kategorie": "Politik",
        "Frage": "Wer war der erste Bundeskanzler der Bundesrepublik Deutschland?",
        "Antwort": "Konrad Adenauer",
        "Tipp": "Er war auch Vorsitzender der CDU.",
        "Optionen": "Konrad Adenauer;Willy Brandt;Helmut Kohl;Ludwig Erhard",
        "Punkte": 100
    },
    {
        "Kategorie": "Politik",
        "Frage": "Welche politische Theorie wurde von Karl Marx und Friedrich Engels begründet?",
        "Antwort": "Kommunismus",
        "Tipp": "Diese Theorie fordert eine klassenlose Gesellschaft.",
        "Optionen": "Kommunismus;Sozialismus;Kapitalismus;Anarchismus",
        "Punkte": 200
    },
    {
        "Kategorie": "Politik",
        "Frage": "Welches Abkommen begründete die Europäische Union?",
        "Antwort": "Der Vertrag von Maastricht",
        "Tipp": "Dieses Abkommen trat 1993 in Kraft.",
        "Optionen": "Der Vertrag von Maastricht;Die Römischen Verträge;Der Vertrag von Lissabon;Der Schengener Vertrag",
        "Punkte": 200
    },
    {
        "Kategorie": "Politik",
        "Frage": "Welche politische Philosophie legt Wert auf persönliche Freiheit und die Rechte des Einzelnen?",
        "Antwort": "Liberalismus",
        "Tipp": "John Locke gilt als ein wichtiger Vertreter dieser Philosophie.",
        "Optionen": "Liberalismus;Konservatismus;Sozialismus;Kommunismus",
        "Punkte": 200
    },
    {
        "Kategorie": "Politik",
        "Frage": "Welche Bewegung in Indien wurde von Mahatma Gandhi angeführt?",
        "Antwort": "Der Unabhängigkeitskampf",
        "Tipp": "Diese Bewegung setzte auf gewaltlosen Widerstand gegen die britische Kolonialherrschaft.",
        "Optionen": "Der Unabhängigkeitskampf;Der Indische Nationalkongress;Die Quit India Bewegung;Der Salzmarsch",
        "Punkte": 200
    },
    {
        "Kategorie": "Politik",
        "Frage": "Welche Revolution führte zur Gründung der Sowjetunion?",
        "Antwort": "Die Russische Revolution von 1917",
        "Tipp": "Diese Revolution setzte das zaristische Regime in Russland ab.",
        "Optionen": "Die Russische Revolution von 1917;Die Französische Revolution;Die Oktoberrevolution;Die Chinesische Revolution",
        "Punkte": 300
    },
    {
        "Kategorie": "Politik",
        "Frage": "Welche politische Ideologie befürwortet eine zentrale Planwirtschaft und die Abschaffung des Privateigentums?",
        "Antwort": "Kommunismus",
        "Tipp": "Diese Ideologie wurde durch die Oktoberrevolution in Russland 1917 umgesetzt.",
        "Optionen": "Kommunismus;Sozialismus;Faschismus;Kapitalismus",
        "Punkte": 300
    },
    {
        "Kategorie": "Politik",
        "Frage": "Welches politische System basiert auf der Trennung der staatlichen Gewalt in Legislative, Exekutive und Judikative?",
        "Antwort": "Gewaltenteilung",
        "Tipp": "Dieses Prinzip wurde von Montesquieu im 18. Jahrhundert formuliert.",
        "Optionen": "Gewaltenteilung;Diktatur;Monarchie;Oligarchie",
        "Punkte": 300
    },
    {
        "Kategorie": "Politik",
        "Frage": "Welches internationale Abkommen legte die Grundlagen für die Vereinten Nationen?",
        "Antwort": "Die Atlantik-Charta",
        "Tipp": "Dieses Abkommen wurde 1941 zwischen den USA und Großbritannien geschlossen.",
        "Optionen": "Die Atlantik-Charta;Der Vertrag von Versailles;Die Genfer Konventionen;Der Potsdamer Vertrag",
        "Punkte": 300
    },
    {
        "Kategorie": "Politik",
        "Frage": "Welcher Vertrag beendete den Dreißigjährigen Krieg und schuf das moderne Staatensystem?",
        "Antwort": "Der Westfälische Frieden",
        "Tipp": "Dieser Vertrag wurde 1648 in Münster und Osnabrück unterzeichnet.",
        "Optionen": "Der Westfälische Frieden;Der Wiener Kongress;Der Vertrag von Utrecht;Der Frieden von Paris",
        "Punkte": 400
    },
    {
        "Kategorie": "Politik",
        "Frage": "Welcher Theoretiker entwickelte das Konzept des 'gesellschaftlichen Vertrags' als Grundlage der staatlichen Legitimation?",
        "Antwort": "Jean-Jacques Rousseau",
        "Tipp": "Sein Werk 'Vom Gesellschaftsvertrag' beeinflusste viele Revolutionen des 18. und 19. Jahrhunderts.",
        "Optionen": "Jean-Jacques Rousseau;Thomas Hobbes;John Locke;Niccolò Machiavelli",
        "Punkte": 400
    },
    {
        "Kategorie": "Politik",
        "Frage": "Welches politische System wird durch die Herrschaft einer kleinen Gruppe oder Elite bestimmt?",
        "Antwort": "Oligarchie",
        "Tipp": "Dieses System unterscheidet sich von der Demokratie und der Monarchie.",
        "Optionen": "Oligarchie;Diktatur;Aristokratie;Theokratie",
        "Punkte": 400
    },
    {
        "Kategorie": "Politik",
        "Frage": "Welcher Politikwissenschaftler schrieb das Werk 'Der Fürst', das die Grundlagen der modernen Machtpolitik beschreibt?",
        "Antwort": "Niccolò Machiavelli",
        "Tipp": "Dieses Werk wird oft als Handbuch für Herrscher angesehen.",
        "Optionen": "Niccolò Machiavelli;Thomas Hobbes;John Locke;Jean-Jacques Rousseau",
        "Punkte": 400
    },
    {
        "Kategorie": "Politik",
        "Frage": "Welcher deutsche Bundeskanzler leitete die Wiedervereinigung Deutschlands?",
        "Antwort": "Helmut Kohl",
        "Tipp": "Er war Kanzler von 1982 bis 1998.",
        "Optionen": "Helmut Kohl;Gerhard Schröder;Angela Merkel;Willy Brandt",
        "Punkte": 100
    },
    {
        "Kategorie": "Politik",
        "Frage": "Welches Land ist bekannt für seine politische Neutralität und beherbergt viele internationale Organisationen?",
        "Antwort": "Schweiz",
        "Tipp": "Dieses Land liegt in den Alpen.",
        "Optionen": "Schweiz;Schweden;Norwegen;Österreich",
        "Punkte": 100
    },
    {
        "Kategorie": "Politik",
        "Frage": "Wer ist der aktuelle Generalsekretär der Vereinten Nationen?",
        "Antwort": "António Guterres",
        "Tipp": "Er ist seit 2017 im Amt und kommt aus Portugal.",
        "Optionen": "António Guterres;Ban Ki-moon;Kofi Annan;Javier Pérez de Cuéllar",
        "Punkte": 100
    },
    {
        "Kategorie": "Politik",
        "Frage": "Welcher politische Begriff beschreibt die Herrschaft des Volkes durch gewählte Vertreter?",
        "Antwort": "Demokratie",
        "Tipp": "Das Wort leitet sich aus dem Griechischen ab.",
        "Optionen": "Demokratie;Monarchie;Oligarchie;Theokratie",
        "Punkte": 100
    },
    {
        "Kategorie": "Politik",
        "Frage": "Welche europäische Institution hat die Aufgabe, Gesetze vorzuschlagen und zu überwachen?",
        "Antwort": "Die Europäische Kommission",
        "Tipp": "Diese Institution wird oft als die Exekutive der EU bezeichnet.",
        "Optionen": "Die Europäische Kommission;Der Europäische Rat;Das Europäische Parlament;Der Europäische Gerichtshof",
        "Punkte": 200
    },
    {
        "Kategorie": "Politik",
        "Frage": "Welche politische Theorie besagt, dass die Macht beim Volk liegt und dass alle Bürger an der Regierung teilhaben sollten?",
        "Antwort": "Republikanismus",
        "Tipp": "Diese Theorie betont die Bürgerrechte und das Gemeinwohl.",
        "Optionen": "Republikanismus;Monarchismus;Oligarchismus;Despotismus",
        "Punkte": 200
    },
    {
        "Kategorie": "Politik",
        "Frage": "Welcher Begriff beschreibt die wirtschaftliche und politische Herrschaft einer Nation über andere Länder?",
        "Antwort": "Imperialismus",
        "Tipp": "Dieser Begriff ist eng mit der Kolonialzeit verbunden.",
        "Optionen": "Imperialismus;Kolonialismus;Kapitalismus;Globalismus",
        "Punkte": 200
    },
    {
        "Kategorie": "Politik",
        "Frage": "Welcher deutsche Politiker führte die Ostpolitik ein, die eine Annäherung an den Ostblock suchte?",
        "Antwort": "Willy Brandt",
        "Tipp": "Er erhielt den Friedensnobelpreis für seine Bemühungen.",
        "Optionen": "Willy Brandt;Konrad Adenauer;Helmut Schmidt;Gerhard Schröder",
        "Punkte": 200
    },
    {
        "Kategorie": "Politik",
        "Frage": "Welche politische Ideologie strebt nach der Gleichstellung aller Bürger und der Abschaffung sozialer Ungleichheiten?",
        "Antwort": "Sozialismus",
        "Tipp": "Diese Ideologie steht oft im Gegensatz zum Kapitalismus.",
        "Optionen": "Sozialismus;Liberalismus;Konservatismus;Faschismus",
        "Punkte": 300
    },
    {
        "Kategorie": "Politik",
        "Frage": "Welche Revolution in Frankreich führte zur Abschaffung der Monarchie und zur Gründung der Ersten Republik?",
        "Antwort": "Die Französische Revolution",
        "Tipp": "Diese Revolution begann 1789.",
        "Optionen": "Die Französische Revolution;Die Russische Revolution;Die Industrielle Revolution;Die Glorreiche Revolution",
        "Punkte": 300
    },
    {
        "Kategorie": "Politik",
        "Frage": "Welches politische System basiert auf dem Prinzip der zentralen Führung durch eine einzelne Person oder Partei?",
        "Antwort": "Diktatur",
        "Tipp": "In diesem System gibt es keine freie Meinungsäußerung oder Wahlen.",
        "Optionen": "Diktatur;Monarchie;Republik;Oligarchie",
        "Punkte": 300
    },
    {
        "Kategorie": "Politik",
        "Frage": "Welches politische Konzept beschreibt die wirtschaftliche Zusammenarbeit und Integration zwischen Ländern, um Frieden und Stabilität zu fördern?",
        "Antwort": "Internationalismus",
        "Tipp": "Die Europäische Union ist ein Beispiel für dieses Konzept.",
        "Optionen": "Internationalismus;Nationalismus;Isolationismus;Hegemonie",
        "Punkte": 300
    },
    {
        "Kategorie": "Politik",
        "Frage": "Welche politische Theorie vertritt die Ansicht, dass alle Menschen in einem Zustand natürlicher Freiheit und Gleichheit leben?",
        "Antwort": "Naturrecht",
        "Tipp": "Diese Theorie ist eng mit den Schriften von John Locke verbunden.",
        "Optionen": "Naturrecht;Rechtspositivismus;Utilitarismus;Realismus",
        "Punkte": 400
    },
    {
        "Kategorie": "Politik",
        "Frage": "Welches politische Ereignis markiert den Beginn der modernen Menschenrechte und der demokratischen Entwicklung in Europa?",
        "Antwort": "Die Französische Revolution",
        "Tipp": "Dieses Ereignis führte zur Erklärung der Menschen- und Bürgerrechte.",
        "Optionen": "Die Französische Revolution;Der Westfälische Frieden;Die Magna Carta;Die Oktoberrevolution",
        "Punkte": 400
    },
    {
        "Kategorie": "Politik",
        "Frage": "Welche politische Philosophie befürwortet den Abbau staatlicher Macht und die Förderung der individuellen Freiheit?",
        "Antwort": "Libertarismus",
        "Tipp": "Diese Philosophie steht im Gegensatz zu kollektivistischen Ideologien.",
        "Optionen": "Libertarismus;Konservatismus;Sozialismus;Kommunismus",
        "Punkte": 400
    },
    {
        "Kategorie": "Politik",
        "Frage": "Welche Verfassung legte 1787 die Grundlage für das Regierungssystem der Vereinigten Staaten?",
        "Antwort": "Die Verfassung der Vereinigten Staaten",
        "Tipp": "Diese Verfassung ist die älteste noch in Kraft befindliche schriftliche Verfassung.",
        "Optionen": "Die Verfassung der Vereinigten Staaten;Die Unabhängigkeitserklärung;Der Vertrag von Paris;Der Emancipation Proclamation",
        "Punkte": 400
    },
    {
        "Kategorie": "Wirtschaft",
        "Frage": "Welche Art von Markt hat nur einen einzigen Anbieter für ein Produkt oder eine Dienstleistung?",
        "Antwort": "Monopol",
        "Tipp": "Dieser Markt ist durch fehlende Konkurrenz gekennzeichnet.",
        "Optionen": "Monopol;Oligopol;Polypol;Kartell",
        "Punkte": 100
    },
    {
        "Kategorie": "Wirtschaft",
        "Frage": "Welcher Begriff beschreibt die allgemeine Preissteigerung in einer Volkswirtschaft?",
        "Antwort": "Inflation",
        "Tipp": "Dieser Begriff bedeutet auch, dass das Geld an Wert verliert.",
        "Optionen": "Inflation;Deflation;Stagflation;Rezession",
        "Punkte": 100
    },
    {
        "Kategorie": "Wirtschaft",
        "Frage": "Welches Bruttoinlandsprodukt (BIP) misst den Gesamtwert aller Waren und Dienstleistungen, die in einem Jahr in einem Land produziert werden?",
        "Antwort": "Bruttoinlandsprodukt",
        "Tipp": "Dieses Maß wird oft verwendet, um die Wirtschaftskraft eines Landes zu beurteilen.",
        "Optionen": "Bruttoinlandsprodukt;Nettoinlandsprodukt;Bruttonationaleinkommen;Nettosozialprodukt",
        "Punkte": 100
    },
    {
        "Kategorie": "Wirtschaft",
        "Frage": "Welche Währung wird in Japan verwendet?",
        "Antwort": "Yen",
        "Tipp": "Diese Währung wird mit dem Symbol ¥ dargestellt.",
        "Optionen": "Yen;Renminbi;Won;Baht",
        "Punkte": 100
    },
    {
        "Kategorie": "Wirtschaft",
        "Frage": "Welcher Begriff beschreibt die Senkung des allgemeinen Preisniveaus in einer Volkswirtschaft?",
        "Antwort": "Deflation",
        "Tipp": "Das Gegenteil von Inflation.",
        "Optionen": "Deflation;Stagflation;Rezession;Depression",
        "Punkte": 200
    },
    {
        "Kategorie": "Wirtschaft",
        "Frage": "Welches Wirtschaftssystem basiert auf dem freien Spiel von Angebot und Nachfrage?",
        "Antwort": "Marktwirtschaft",
        "Tipp": "In diesem System entscheiden die Preise über Produktion und Konsum.",
        "Optionen": "Marktwirtschaft;Planwirtschaft;Subsistenzwirtschaft;Naturalwirtschaft",
        "Punkte": 200
    },
    {
        "Kategorie": "Wirtschaft",
        "Frage": "Was versteht man unter dem Begriff 'Bruttonationaleinkommen' (BNE)?",
        "Antwort": "Den Gesamtwert aller von den Bürgern eines Landes produzierten Waren und Dienstleistungen, unabhängig vom Ort der Produktion",
        "Tipp": "Dieser Wert umfasst auch die Einkommen, die im Ausland erzielt wurden.",
        "Optionen": "Den Gesamtwert aller von den Bürgern eines Landes produzierten Waren und Dienstleistungen, unabhängig vom Ort der Produktion;Den Gesamtwert aller in einem Land produzierten Waren und Dienstleistungen;Den Gesamtwert aller Exporte eines Landes;Den Gesamtwert der in einem Land gehaltenen Vermögenswerte",
        "Punkte": 200
    },
    {
        "Kategorie": "Wirtschaft",
        "Frage": "Welches ökonomische Prinzip besagt, dass die Opportunitätskosten den Preis widerspiegeln, den man für die nächste beste Alternative zahlt?",
        "Antwort": "Das Prinzip der Opportunitätskosten",
        "Tipp": "Dieses Prinzip hilft zu verstehen, wie Ressourcen effizient genutzt werden.",
        "Optionen": "Das Prinzip der Opportunitätskosten;Das Gesetz des abnehmenden Ertrags;Das Prinzip der komparativen Vorteile;Das Prinzip der Marginalität",
        "Punkte": 200
    },
    {
        "Kategorie": "Wirtschaft",
        "Frage": "Welche Theorie beschreibt, dass internationale Handelsvorteile durch Spezialisierung auf Produkte entstehen, bei denen ein Land einen komparativen Vorteil hat?",
        "Antwort": "Theorie der komparativen Vorteile",
        "Tipp": "David Ricardo entwickelte diese Theorie.",
        "Optionen": "Theorie der komparativen Vorteile;Theorie der absoluten Vorteile;Theorie der relativen Vorteile;Theorie der Skaleneffekte",
        "Punkte": 300
    },
    {
        "Kategorie": "Wirtschaft",
        "Frage": "Was versteht man unter dem Begriff 'Subprime-Krise'?",
        "Antwort": "Eine Finanzkrise, die durch den Ausfall von Hypothekenkrediten niedriger Bonität verursacht wurde",
        "Tipp": "Diese Krise führte 2008 zu einer globalen Rezession.",
        "Optionen": "Eine Finanzkrise, die durch den Ausfall von Hypothekenkrediten niedriger Bonität verursacht wurde;Eine Krise, die durch steigende Zinssätze ausgelöst wurde;Eine Krise, die durch übermäßigen Staatskonsum verursacht wurde;Eine Krise, die durch den Zusammenbruch des Goldstandards ausgelöst wurde",
        "Punkte": 300
    },
    {
        "Kategorie": "Wirtschaft",
        "Frage": "Welche Wirtschaftsform plant und steuert die Produktion und Verteilung von Gütern zentral durch den Staat?",
        "Antwort": "Planwirtschaft",
        "Tipp": "Diese Wirtschaftsform wurde in sozialistischen Staaten wie der Sowjetunion angewendet.",
        "Optionen": "Planwirtschaft;Marktwirtschaft;Subsistenzwirtschaft;Mischwirtschaft",
        "Punkte": 300
    },
    {
        "Kategorie": "Wirtschaft",
        "Frage": "Welcher Begriff beschreibt eine Marktsituation, in der viele Anbieter und viele Nachfrager vorhanden sind?",
        "Antwort": "Polypol",
        "Tipp": "Dies ist das Gegenteil von Monopol.",
        "Optionen": "Polypol;Monopol;Oligopol;Kartell",
        "Punkte": 300
    },
    {
        "Kategorie": "Wirtschaft",
        "Frage": "Welcher Wirtschaftstheoretiker entwickelte das Konzept der 'unsichtbaren Hand', das beschreibt, wie individuelle Interessen das Gemeinwohl fördern?",
        "Antwort": "Adam Smith",
        "Tipp": "Er schrieb 'Der Wohlstand der Nationen'.",
        "Optionen": "Adam Smith;John Maynard Keynes;David Ricardo;Karl Marx",
        "Punkte": 400
    },
    {
        "Kategorie": "Wirtschaft",
        "Frage": "Welches Konzept besagt, dass der Nutzenzuwachs eines zusätzlichen Gutes mit zunehmender Menge abnimmt?",
        "Antwort": "Das Gesetz des abnehmenden Grenznutzens",
        "Tipp": "Dieses Gesetz ist zentral für die Mikroökonomie.",
        "Optionen": "Das Gesetz des abnehmenden Grenznutzens;Das Prinzip der komparativen Vorteile;Das Gesetz des steigenden Ertrags;Das Prinzip der Opportunitätskosten",
        "Punkte": 400
    },
    {
        "Kategorie": "Wirtschaft",
        "Frage": "Welche Marktform liegt vor, wenn nur wenige Anbieter den Markt dominieren?",
        "Antwort": "Oligopol",
        "Tipp": "In dieser Marktform gibt es zwar mehrere Anbieter, aber nur wenige große Unternehmen beherrschen den Markt.",
        "Optionen": "Oligopol;Monopol;Polypol;Kartell",
        "Punkte": 400
    },
    {
        "Kategorie": "Wirtschaft",
        "Frage": "Welche Art von Steuern erhebt der Staat direkt auf das Einkommen der Bürger?",
        "Antwort": "Direkte Steuern",
        "Tipp": "Einkommensteuer ist ein Beispiel für diese Steuerart.",
        "Optionen": "Direkte Steuern;Indirekte Steuern;Verbrauchssteuern;Zölle",
        "Punkte": 400
    },
    {
        "Kategorie": "Wirtschaft",
        "Frage": "Welches deutsche Unternehmen ist für die Herstellung von Autos weltweit bekannt und hat das Logo mit dem Stern?",
        "Antwort": "Mercedes-Benz",
        "Tipp": "Dieses Unternehmen hat seinen Sitz in Stuttgart.",
        "Optionen": "Mercedes-Benz;BMW;Audi;Volkswagen",
        "Punkte": 100
    },
    {
        "Kategorie": "Wirtschaft",
        "Frage": "Welches Land ist der größte Ölproduzent der Welt?",
        "Antwort": "Saudi-Arabien",
        "Tipp": "Dieses Land ist ein führendes Mitglied der OPEC.",
        "Optionen": "Saudi-Arabien;USA;Russland;Kanada",
        "Punkte": 100
    },
    {
        "Kategorie": "Wirtschaft",
        "Frage": "Welcher Begriff beschreibt den Anteil der Arbeitslosen an der Gesamtbevölkerung, die dem Arbeitsmarkt zur Verfügung steht?",
        "Antwort": "Arbeitslosenquote",
        "Tipp": "Diese Kennzahl wird oft verwendet, um die wirtschaftliche Gesundheit eines Landes zu beurteilen.",
        "Optionen": "Arbeitslosenquote;Beschäftigungsquote;Erwerbsquote;Wachstumsquote",
        "Punkte": 100
    },
    {
        "Kategorie": "Wirtschaft",
        "Frage": "Welche Währung wird in Großbritannien verwendet?",
        "Antwort": "Pfund Sterling",
        "Tipp": "Diese Währung wird mit dem Symbol £ dargestellt.",
        "Optionen": "Pfund Sterling;Euro;Dollar;Schweizer Franken",
        "Punkte": 100
    },
    {
        "Kategorie": "Wirtschaft",
        "Frage": "Welche Steuer wird direkt auf den Verbrauch von Waren und Dienstleistungen erhoben?",
        "Antwort": "Mehrwertsteuer",
        "Tipp": "Diese Steuer ist in den meisten Ländern Teil des Endpreises von Produkten.",
        "Optionen": "Mehrwertsteuer;Einkommensteuer;Körperschaftssteuer;Vermögenssteuer",
        "Punkte": 200
    },
    {
        "Kategorie": "Wirtschaft",
        "Frage": "Welcher Begriff beschreibt eine Phase der Wirtschaft, in der das Bruttoinlandsprodukt über zwei aufeinanderfolgende Quartale sinkt?",
        "Antwort": "Rezession",
        "Tipp": "Diese Phase kann zu steigender Arbeitslosigkeit führen.",
        "Optionen": "Rezession;Depression;Inflation;Stagflation",
        "Punkte": 200
    },
    {
        "Kategorie": "Wirtschaft",
        "Frage": "Welche Art von Wirtschaftspolitik zielt darauf ab, durch Erhöhung der Staatsausgaben und Senkung der Steuern die gesamtwirtschaftliche Nachfrage zu steigern?",
        "Antwort": "Fiskalpolitik",
        "Tipp": "Diese Politik wird oft während wirtschaftlicher Abschwünge eingesetzt.",
        "Optionen": "Fiskalpolitik;Monetärpolitik;Strukturpolitik;Handelspolitik",
        "Punkte": 200
    },
    {
        "Kategorie": "Wirtschaft",
        "Frage": "Welcher Begriff beschreibt die Gesamtheit aller finanziellen Transaktionen, die zwischen einem Land und dem Rest der Welt innerhalb eines bestimmten Zeitraums stattfinden?",
        "Antwort": "Zahlungsbilanz",
        "Tipp": "Diese Bilanz umfasst den Handel mit Gütern und Dienstleistungen sowie Kapitalbewegungen.",
        "Optionen": "Zahlungsbilanz;Handelsbilanz;Leistungsbilanz;Kapitalbilanz",
        "Punkte": 200
    },
    {
        "Kategorie": "Wirtschaft",
        "Frage": "Welche Marktsituation besteht, wenn ein einziger Käufer einem oder mehreren Verkäufern gegenübersteht?",
        "Antwort": "Monopson",
        "Tipp": "Diese Situation ist das Gegenstück zum Monopol.",
        "Optionen": "Monopson;Monopol;Oligopol;Polypol",
        "Punkte": 300
    },
    {
        "Kategorie": "Wirtschaft",
        "Frage": "Welche Theorie besagt, dass Unternehmen ihre Produktionsfaktoren so kombinieren, dass die Kosten für die Produktion eines Gutes minimiert werden?",
        "Antwort": "Kostenminimierungstheorie",
        "Tipp": "Diese Theorie ist ein zentraler Aspekt der Mikroökonomie.",
        "Optionen": "Kostenminimierungstheorie;Ertragsgesetz;Kosten-Nutzen-Analyse;Effizienztheorie",
        "Punkte": 300
    },
    {
        "Kategorie": "Wirtschaft",
        "Frage": "Welcher Begriff beschreibt die Praxis, Unternehmen oder Industrien durch staatliche Unterstützung vor ausländischer Konkurrenz zu schützen?",
        "Antwort": "Protektionismus",
        "Tipp": "Zölle und Importquoten sind typische Maßnahmen dieses Systems.",
        "Optionen": "Protektionismus;Laissez-faire;Freihandel;Deregulierung",
        "Punkte": 300
    },
    {
        "Kategorie": "Wirtschaft",
        "Frage": "Welche Krise begann im Jahr 1929 und führte weltweit zu einer massiven wirtschaftlichen Depression?",
        "Antwort": "Die Große Depression",
        "Tipp": "Diese Krise begann mit dem Zusammenbruch der Wall Street.",
        "Optionen": "Die Große Depression;Die Subprime-Krise;Die Ölkrise;Die Dotcom-Blase",
        "Punkte": 300
    },
    {
        "Kategorie": "Wirtschaft",
        "Frage": "Welcher Wirtschaftswissenschaftler entwickelte das Konzept des 'Multiplikatoreffekts', das beschreibt, wie eine Erhöhung der Staatsausgaben die gesamtwirtschaftliche Nachfrage erhöht?",
        "Antwort": "John Maynard Keynes",
        "Tipp": "Er ist auch bekannt als der Begründer der keynesianischen Wirtschaftstheorie.",
        "Optionen": "John Maynard Keynes;Milton Friedman;Friedrich Hayek;Adam Smith",
        "Punkte": 400
    },
    {
        "Kategorie": "Wirtschaft",
        "Frage": "Welcher Begriff beschreibt die Praxis, durch den Verkauf einer Währung und den Kauf einer anderen von Wechselkursschwankungen zu profitieren?",
        "Antwort": "Devisenhandel",
        "Tipp": "Diese Praxis findet auf den internationalen Finanzmärkten statt.",
        "Optionen": "Devisenhandel;Arbitrage;Hedging;Derivatehandel",
        "Punkte": 400
    },
    {
        "Kategorie": "Wirtschaft",
        "Frage": "Welches Wirtschaftsmodell postuliert, dass freie Märkte effizient sind und dass Eingriffe durch den Staat in der Regel zu Ineffizienzen führen?",
        "Antwort": "Neoklassisches Modell",
        "Tipp": "Dieses Modell basiert auf den Ideen von Adam Smith und David Ricardo.",
        "Optionen": "Neoklassisches Modell;Keynesianisches Modell;Marxistisches Modell;Malthusianisches Modell",
        "Punkte": 400
    },
    {
        "Kategorie": "Wirtschaft",
        "Frage": "Welche Art von Marktversagen tritt auf, wenn ein Markt nicht die optimale Menge an Gütern produziert, die die Gesellschaft benötigt, z. B. durch Umweltverschmutzung?",
        "Antwort": "Externe Effekte",
        "Tipp": "Dieses Marktversagen kann sowohl positive als auch negative Auswirkungen haben.",
        "Optionen": "Externe Effekte;Monopolmacht;Asymmetrische Information;Öffentliche Güter",
        "Punkte": 400
    },
    {
        "Kategorie": "Natur und Umwelt",
        "Frage": "Welches Gas macht den größten Anteil der Erdatmosphäre aus?",
        "Antwort": "Stickstoff",
        "Tipp": "Dieses Gas macht etwa 78 % der Atmosphäre aus.",
        "Optionen": "Stickstoff;Sauerstoff;Kohlendioxid;Argon",
        "Punkte": 100
    },
    {
        "Kategorie": "Natur und Umwelt",
        "Frage": "Welcher Planet ist der größte in unserem Sonnensystem?",
        "Antwort": "Jupiter",
        "Tipp": "Dieser Planet hat einen großen roten Fleck, der ein riesiger Sturm ist.",
        "Optionen": "Jupiter;Saturn;Neptun;Erde",
        "Punkte": 100
    },
    {
        "Kategorie": "Natur und Umwelt",
        "Frage": "Welches Element ist in der Erdrinde am häufigsten vertreten?",
        "Antwort": "Sauerstoff",
        "Tipp": "Dieses Element macht etwa 46 % der Erdrinde aus.",
        "Optionen": "Sauerstoff;Silizium;Aluminium;Eisen",
        "Punkte": 100
    },
    {
        "Kategorie": "Natur und Umwelt",
        "Frage": "Welche Tierart wird oft als 'König der Tiere' bezeichnet?",
        "Antwort": "Löwe",
        "Tipp": "Dieses Tier lebt hauptsächlich in Afrika und ist für seine Mähne bekannt.",
        "Optionen": "Löwe;Tiger;Elefant;Adler",
        "Punkte": 100
    },
    {
        "Kategorie": "Natur und Umwelt",
        "Frage": "Welcher Prozess beschreibt die Umwandlung von Sonnenenergie in chemische Energie durch Pflanzen?",
        "Antwort": "Photosynthese",
        "Tipp": "Dieser Prozess produziert Sauerstoff als Nebenprodukt.",
        "Optionen": "Photosynthese;Atmung;Gärung;Transpiration",
        "Punkte": 200
    },
    {
        "Kategorie": "Natur und Umwelt",
        "Frage": "Welcher Waldtyp ist durch eine hohe Artenvielfalt und ein warmes, feuchtes Klima gekennzeichnet?",
        "Antwort": "Regenwald",
        "Tipp": "Dieser Waldtyp kommt vor allem in den Tropen vor.",
        "Optionen": "Regenwald;Taiga;Savanne;Laubwald",
        "Punkte": 200
    },
    {
        "Kategorie": "Natur und Umwelt",
        "Frage": "Welcher Begriff beschreibt die Anpassung von Organismen an ihre Umwelt über viele Generationen hinweg?",
        "Antwort": "Evolution",
        "Tipp": "Charles Darwin ist bekannt für seine Theorie in diesem Bereich.",
        "Optionen": "Evolution;Mutation;Selektion;Adaption",
        "Punkte": 200
    },
    {
        "Kategorie": "Natur und Umwelt",
        "Frage": "Welches Abkommen wurde 2015 unterzeichnet, um den Klimawandel zu bekämpfen?",
        "Antwort": "Pariser Abkommen",
        "Tipp": "Dieses Abkommen zielt darauf ab, die globale Erwärmung auf unter 2 Grad Celsius zu begrenzen.",
        "Optionen": "Pariser Abkommen;Kyoto-Protokoll;Montreal-Protokoll;Agenda 21",
        "Punkte": 200
    },
    {
        "Kategorie": "Natur und Umwelt",
        "Frage": "Welches ist das größte Korallenriffsystem der Welt?",
        "Antwort": "Great Barrier Reef",
        "Tipp": "Dieses Riff liegt vor der Küste Australiens.",
        "Optionen": "Great Barrier Reef;Belize Barrier Reef;Rotes Meer;Florida Reef",
        "Punkte": 300
    },
    {
        "Kategorie": "Natur und Umwelt",
        "Frage": "Welches Phänomen beschreibt die Erwärmung der Erde durch die Anreicherung von Treibhausgasen in der Atmosphäre?",
        "Antwort": "Treibhauseffekt",
        "Tipp": "Dieses Phänomen ist eng mit dem Klimawandel verbunden.",
        "Optionen": "Treibhauseffekt;El Niño;Klimawandel;Ozonloch",
        "Punkte": 300
    },
    {
        "Kategorie": "Natur und Umwelt",
        "Frage": "Welche Meeresströmung ist die größte und stärkste der Welt und beeinflusst das Klima in Europa?",
        "Antwort": "Golfstrom",
        "Tipp": "Diese Strömung transportiert warmes Wasser aus den Tropen nach Norden.",
        "Optionen": "Golfstrom;El Niño;Kuroshio-Strom;Benguela-Strom",
        "Punkte": 300
    },
    {
        "Kategorie": "Natur und Umwelt",
        "Frage": "Welches Gestein entsteht durch die Abkühlung von Magma oder Lava?",
        "Antwort": "Vulkanisches Gestein",
        "Tipp": "Basalt ist ein häufiges Beispiel für dieses Gestein.",
        "Optionen": "Vulkanisches Gestein;Metamorphes Gestein;Sedimentgestein;Magmatisches Gestein",
        "Punkte": 300
    },
    {
        "Kategorie": "Natur und Umwelt",
        "Frage": "Welches Ökosystem wird durch regelmäßige Überflutung und eine hohe Artenvielfalt gekennzeichnet?",
        "Antwort": "Feuchtgebiet",
        "Tipp": "Diese Ökosysteme sind wichtig für den Wasserhaushalt und die Biodiversität.",
        "Optionen": "Feuchtgebiet;Wüste;Tundra;Steppe",
        "Punkte": 400
    },
    {
        "Kategorie": "Natur und Umwelt",
        "Frage": "Welche Art von Energie wird durch die Nutzung von Erdwärme gewonnen?",
        "Antwort": "Geothermie",
        "Tipp": "Diese Energiequelle ist nachhaltig und verursacht kaum Emissionen.",
        "Optionen": "Geothermie;Solarenergie;Windenergie;Biomasse",
        "Punkte": 400
    },
    {
        "Kategorie": "Natur und Umwelt",
        "Frage": "Welcher Fluss ist der längste der Welt?",
        "Antwort": "Nil",
        "Tipp": "Dieser Fluss fließt durch mehrere Länder in Nordafrika.",
        "Optionen": "Nil;Amazonas;Yangtse;Mississippi",
        "Punkte": 400
    },
    {
        "Kategorie": "Natur und Umwelt",
        "Frage": "Welche internationale Organisation ist für den Schutz der natürlichen Umwelt und die Förderung nachhaltiger Entwicklung zuständig?",
        "Antwort": "UNEP (Umweltprogramm der Vereinten Nationen)",
        "Tipp": "Diese Organisation wurde 1972 gegründet.",
        "Optionen": "UNEP;WWF;Greenpeace;FAO",
        "Punkte": 400
    },
    {
        "Kategorie": "Natur und Umwelt",
        "Frage": "Welches Tier ist das größte Säugetier der Welt?",
        "Antwort": "Blauwal",
        "Tipp": "Dieses Tier lebt im Ozean und kann bis zu 30 Meter lang werden.",
        "Optionen": "Blauwal;Elefant;Pottwal;Nashorn",
        "Punkte": 100
    },
    {
        "Kategorie": "Natur und Umwelt",
        "Frage": "Welche Energiequelle wird durch die Strahlung der Sonne gewonnen?",
        "Antwort": "Solarenergie",
        "Tipp": "Diese Energieform wird oft mit Solarpanelen gesammelt.",
        "Optionen": "Solarenergie;Windenergie;Wasserkraft;Geothermie",
        "Punkte": 100
    },
    {
        "Kategorie": "Natur und Umwelt",
        "Frage": "Welcher Vogel ist bekannt für seine Fähigkeit, rückwärts zu fliegen?",
        "Antwort": "Kolibri",
        "Tipp": "Dieser kleine Vogel ist auch für seine Fähigkeit bekannt, in der Luft zu schweben.",
        "Optionen": "Kolibri;Adler;Falke;Papagei",
        "Punkte": 100
    },
    {
        "Kategorie": "Natur und Umwelt",
        "Frage": "Welche Pflanzenart produziert Sauerstoff als Nebenprodukt der Photosynthese?",
        "Antwort": "Algen",
        "Tipp": "Diese Pflanzenart lebt sowohl im Wasser als auch an Land.",
        "Optionen": "Algen;Moose;Farne;Gräser",
        "Punkte": 100
    },
    {
        "Kategorie": "Natur und Umwelt",
        "Frage": "Welches Land hat den größten Anteil an tropischem Regenwald?",
        "Antwort": "Brasilien",
        "Tipp": "Der Amazonas-Regenwald erstreckt sich über dieses Land.",
        "Optionen": "Brasilien;Indonesien;Kongo;Indien",
        "Punkte": 200
    },
    {
        "Kategorie": "Natur und Umwelt",
        "Frage": "Welche Art von Schutzgebiet wird eingerichtet, um gefährdete Arten und Lebensräume zu erhalten?",
        "Antwort": "Nationalpark",
        "Tipp": "Diese Gebiete sind oft für die Öffentlichkeit zugänglich.",
        "Optionen": "Nationalpark;Naturschutzgebiet;Biosphärenreservat;Landschaftsschutzgebiet",
        "Punkte": 200
    },
    {
        "Kategorie": "Natur und Umwelt",
        "Frage": "Welches Phänomen führt zur Erosion von Küstenlinien durch die Einwirkung von Wind und Wasser?",
        "Antwort": "Küstenabtragung",
        "Tipp": "Dieses Phänomen kann durch den Bau von Wellenbrechern gemindert werden.",
        "Optionen": "Küstenabtragung;Verwitterung;Sedimentation;Verlandung",
        "Punkte": 200
    },
    {
        "Kategorie": "Natur und Umwelt",
        "Frage": "Welches Element ist das leichteste und häufigste im Universum?",
        "Antwort": "Wasserstoff",
        "Tipp": "Dieses Element ist das erste im Periodensystem.",
        "Optionen": "Wasserstoff;Helium;Sauerstoff;Kohlenstoff",
        "Punkte": 200
    },
    {
        "Kategorie": "Natur und Umwelt",
        "Frage": "Welcher Baum ist bekannt dafür, dass er bis zu 100 Meter hoch werden kann und in Kalifornien vorkommt?",
        "Antwort": "Mammutbaum",
        "Tipp": "Dieser Baum gehört zu den größten und ältesten lebenden Organismen auf der Erde.",
        "Optionen": "Mammutbaum;Eiche;Baobab;Zeder",
        "Punkte": 300
    },
    {
        "Kategorie": "Natur und Umwelt",
        "Frage": "Welches Gestein besteht aus Kalk und wird häufig als Baumaterial verwendet?",
        "Antwort": "Marmor",
        "Tipp": "Dieses Gestein wird oft für Skulpturen und Gebäude verwendet.",
        "Optionen": "Marmor;Granit;Sandstein;Schiefer",
        "Punkte": 300
    },
    {
        "Kategorie": "Natur und Umwelt",
        "Frage": "Welche Schicht der Erdatmosphäre schützt das Leben auf der Erde vor den schädlichen UV-Strahlen der Sonne?",
        "Antwort": "Ozonschicht",
        "Tipp": "Diese Schicht befindet sich in der Stratosphäre.",
        "Optionen": "Ozonschicht;Troposphäre;Mesosphäre;Thermosphäre",
        "Punkte": 300
    },
    {
        "Kategorie": "Natur und Umwelt",
        "Frage": "Welcher Prozess beschreibt den Übergang eines Feststoffs direkt in den gasförmigen Zustand, ohne durch den flüssigen Zustand zu gehen?",
        "Antwort": "Sublimation",
        "Tipp": "Ein Beispiel für diesen Prozess ist das Trockeneis, das direkt zu CO2-Gas wird.",
        "Optionen": "Sublimation;Kondensation;Verdampfung;Schmelzen",
        "Punkte": 300
    },
    {
        "Kategorie": "Natur und Umwelt",
        "Frage": "Welcher wissenschaftliche Begriff beschreibt die maximale Anzahl von Individuen einer Art, die in einem bestimmten Lebensraum überleben kann?",
        "Antwort": "Umweltkapazität",
        "Tipp": "Diese Kapazität wird von den verfügbaren Ressourcen und der Umwelt bestimmt.",
        "Optionen": "Umweltkapazität;Biokapazität;Populationsdichte;Ökologisches Gleichgewicht",
        "Punkte": 400
    },
    {
        "Kategorie": "Natur und Umwelt",
        "Frage": "Welcher Fluss bildet einen Großteil der Grenze zwischen den Vereinigten Staaten und Mexiko?",
        "Antwort": "Rio Grande",
        "Tipp": "Dieser Fluss wird in Mexiko als Río Bravo bezeichnet.",
        "Optionen": "Rio Grande;Mississippi;Colorado;Yukon",
        "Punkte": 400
    },
    {
        "Kategorie": "Natur und Umwelt",
        "Frage": "Welche Art von Vulkan ist der Mount St. Helens, der 1980 in den USA ausbrach?",
        "Antwort": "Schichtvulkan",
        "Tipp": "Dieser Typ von Vulkan hat explosive Eruptionen und steile Hänge.",
        "Optionen": "Schichtvulkan;Schildvulkan;Spaltenvulkan;Aschevulkan",
        "Punkte": 400
    },
    {
        "Kategorie": "Natur und Umwelt",
        "Frage": "Welcher Prozess ist für die Entstehung von Diamanten tief im Erdmantel verantwortlich?",
        "Antwort": "Metamorphose",
        "Tipp": "Dieser Prozess wandelt Kohlenstoff unter extremem Druck und Hitze in Diamanten um.",
        "Optionen": "Metamorphose;Kristallisation;Sedimentation;Magmatisches Erstarren",
        "Punkte": 400
    },
    {
        "Kategorie": "Random",
        "Frage": "Welches Tier ist für seine langsame Bewegung und seine Vorliebe für Schlaf bekannt?",
        "Antwort": "Faultier",
        "Tipp": "Dieses Tier hängt gerne kopfüber an Bäumen.",
        "Optionen": "Faultier;Koala;Panda;Schnecke",
        "Punkte": 100
    },
    {
        "Kategorie": "Random",
        "Frage": "Welcher Buchstabe folgt im Alphabet direkt auf Q?",
        "Antwort": "R",
        "Tipp": "Es ist der 18. Buchstabe im Alphabet.",
        "Optionen": "R;S;P;T",
        "Punkte": 100
    },
    {
        "Kategorie": "Random",
        "Frage": "Welche Farbe entsteht, wenn man Blau und Gelb mischt?",
        "Antwort": "Grün",
        "Tipp": "Diese Farbe ist auch die Farbe von Gras.",
        "Optionen": "Grün;Orange;Lila;Braun",
        "Punkte": 100
    },
    {
        "Kategorie": "Random",
        "Frage": "Welches Lebensmittel ist bekannt dafür, Menschen zum Weinen zu bringen, wenn es geschnitten wird?",
        "Antwort": "Zwiebel",
        "Tipp": "Dieses Gemüse hat viele Schichten.",
        "Optionen": "Zwiebel;Knoblauch;Chili;Ingwer",
        "Punkte": 100
    },
    {
        "Kategorie": "Random",
        "Frage": "Welcher Vogel kann rückwärts fliegen?",
        "Antwort": "Kolibri",
        "Tipp": "Dieser kleine Vogel hat einen schnellen Flügelschlag.",
        "Optionen": "Kolibri;Adler;Papagei;Eule",
        "Punkte": 200
    },
    {
        "Kategorie": "Random",
        "Frage": "Was ist der wissenschaftliche Begriff für das Angstgefühl vor Clowns?",
        "Antwort": "Coulrophobie",
        "Tipp": "Dieser Begriff wird oft in Verbindung mit Horrorfilmen verwendet.",
        "Optionen": "Coulrophobie;Arachnophobie;Aquaphobie;Xenophobie",
        "Punkte": 200
    },
    {
        "Kategorie": "Random",
        "Frage": "Welche berühmte Person ist bekannt für den Satz 'Ich bin dein Vater'?",
        "Antwort": "Darth Vader",
        "Tipp": "Dieser Charakter stammt aus der Star Wars-Saga.",
        "Optionen": "Darth Vader;Luke Skywalker;Obi-Wan Kenobi;Yoda",
        "Punkte": 200
    },
    {
        "Kategorie": "Random",
        "Frage": "Welches Getränk wird traditionell aus fermentierten Trauben hergestellt?",
        "Antwort": "Wein",
        "Tipp": "Dieses Getränk ist oft rot oder weiß.",
        "Optionen": "Wein;Bier;Whisky;Wodka",
        "Punkte": 200
    },
    {
        "Kategorie": "Random",
        "Frage": "Welches Land ist das einzige, das auf allen sieben Kontinenten Militärstützpunkte hat?",
        "Antwort": "USA",
        "Tipp": "Dieses Land hat eine der größten Militärpräsenz weltweit.",
        "Optionen": "USA;Russland;China;Großbritannien",
        "Punkte": 300
    },
    {
        "Kategorie": "Random",
        "Frage": "Welcher Planet im Sonnensystem hat die meisten Monde?",
        "Antwort": "Jupiter",
        "Tipp": "Dieser Planet ist der größte in unserem Sonnensystem.",
        "Optionen": "Jupiter;Saturn;Uranus;Neptun",
        "Punkte": 300
    },
    {
        "Kategorie": "Random",
        "Frage": "Welches Nahrungsmittel war das erste, das von Menschen im Weltraum gegessen wurde?",
        "Antwort": "Apfelmus",
        "Tipp": "Es wurde von den Astronauten der NASA gegessen.",
        "Optionen": "Apfelmus;Schokolade;Cracker;Erdnussbutter",
        "Punkte": 300
    },
    {
        "Kategorie": "Random",
        "Frage": "Welcher Fisch ist bekannt für seine Fähigkeit, elektrische Schocks zu erzeugen?",
        "Antwort": "Zitteraal",
        "Tipp": "Dieser Fisch nutzt Elektrizität zur Verteidigung und zum Beutefang.",
        "Optionen": "Zitteraal;Piranha;Hai;Barrakuda",
        "Punkte": 300
    },
    {
        "Kategorie": "Random",
        "Frage": "Welches Tier schläft im Durchschnitt 22 Stunden pro Tag?",
        "Antwort": "Koala",
        "Tipp": "Dieses Tier lebt in Australien und isst hauptsächlich Eukalyptusblätter.",
        "Optionen": "Koala;Faultier;Katze;Panda",
        "Punkte": 400
    },
    {
        "Kategorie": "Random",
        "Frage": "Welches chemische Element ist nach einem bösen Geist aus der deutschen Folklore benannt?",
        "Antwort": "Kobalt",
        "Tipp": "Dieses Element wird oft mit der Farbe Blau in Verbindung gebracht.",
        "Optionen": "Kobalt;Nickel;Blei;Zink",
        "Punkte": 400
    },
    {
        "Kategorie": "Random",
        "Frage": "Welches Insekt kann unter extremen Bedingungen wie im Vakuum des Weltraums überleben?",
        "Antwort": "Bärtierchen",
        "Tipp": "Dieses winzige Lebewesen ist auch als Tardigrade bekannt.",
        "Optionen": "Bärtierchen;Ameise;Kakerlake;Grille",
        "Punkte": 400
    },
    {
        "Kategorie": "Random",
        "Frage": "Welches Gemüse wurde im antiken Rom als Aphrodisiakum verwendet?",
        "Antwort": "Spargel",
        "Tipp": "Dieses Gemüse hat einen langen, dünnen Stiel und wird oft im Frühling geerntet.",
        "Optionen": "Spargel;Karotte;Zwiebel;Sellerie",
        "Punkte": 400
    }
];