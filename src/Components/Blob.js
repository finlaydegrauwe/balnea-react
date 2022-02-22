import { useParams } from "react-router-dom";
import YummeScreenshot1 from "./Yumme/4 - kies recept.png";
import YummeScreenshot2 from "./Yumme/4 - volg recept.png";
import YummeScreenshot3 from "./Yumme/4 - deel recept.png";
import YummeScreenshot4 from "./Yumme/4 - alternatief voor recept.png";
import YummeScreenshot5 from "./Yumme/4 - voeg toe aan recept.png";
import { ReactComponent as Modereren } from "./Bubbles/i-modereren.svg";
import { ReactComponent as Verbonden } from "./Bubbles/i-verbonden.svg";
import Cameras from "./Camera/cameras.jpg";
import UX from "./Camera/voorbeeld+ux.png";

export default function Blob() {
  let { invoiceId } = useParams();
  if (invoiceId === "over") {
    return (
      <>
        <h1>Over dit project</h1>
        <article>
          De naam Balnea is een verwijzing naar het oude romeinse rijk, waar het
          leven zich voornamelijk afspeelde op twee significante plekken. Je had
          fora (of forum in enkelvoud) en de thermen of ook wel balnea genoemd.
          De fora waren centraal gelegen dorpspleinen waar mensen samen kwamen
          om te praten, handel te drijven en waar er redevoeringen werden
          gehouden door politici. Langs de andere kant waren er de thermen,
          alomtegenwoordige badplaatsen waar mensen naartoe kwamen om samen te
          ontspannen en gesprekken te voeren. Vandaag kennen we fora als online
          ontmoetingsplekken waar we kunnen uitwisselen over onderwerpen die ons
          nauw aan het hart liggen. Zij hebben de fundamenten gelegd voor hoe
          ons sociaal internet er vandaag de dag uitziet. Echter worden er
          steeds meer commerciële en politieke belangen vervlochten binnen ons
          sociaal internet en de sociale media die we zo frequent gebruiken. Met
          dit artistiek onderzoeksproject wil ik de mogelijkheden van sociale
          media aftasten en ontdekken welke alternatieven kunnen zorgen voor een
          humanistischer toekomstbeeld, waar sociale belangen primeren over
          commerciële belangen. Dit platform is een weergave van mijn eigen
          sociale weefsel waarin ik op een cocreatieve manier speculatieve
          toekomstscenario’s verken binnen de grenzen van onze hedendaagse
          maatschappij.
        </article>
      </>
    );
  }
  if (invoiceId === "yumme") {
    return (
      <>
        <h1>Yum-me</h1>
        <article>
          Yum-me is een concept dat tot leven kwam in samenwerking met Noëmi.
          Yum-me moet aansporen om mensen bij elkaar te brengen en recepten te
          laten delen. De manier waarop moet speels aanvoelen en uitnodigen tot
          het delen van intieme momenten en ervaringen. De persoonlijke banden
          die de persoon met eten heeft staan daarbij centraal. Hieronder vallen
          persoonlijke dieetvoorkeuren, ingrediënten die de persoon lekker vind
          en eten binnen een familie- of vriendencontext. De gebruiker kan het
          platform gebruiken om verder op zoek te gaan naar inspirerende
          gerechten, ervaringen van vrienden, concepten, voedselvervangers of
          blogs. De gebruiker krijgt met het platform toegang tot een safe-space
          voor exploratie, experiment en verbinding. Een eerste werkend
          prototype kan je{" "}
          <a href="https://yum-me-alpha.vercel.app">
            <u>hier vinden.</u>
          </a>
          <br></br>
          <br></br>
        </article>
        <article>
          <img alt="concept website" src={YummeScreenshot1} width="100%" />
          <img alt="concept website" src={YummeScreenshot2} width="100%" />
          <img alt="concept website" src={YummeScreenshot3} width="100%" />
          <img alt="concept website" src={YummeScreenshot4} width="100%" />
          <img alt="concept website" src={YummeScreenshot5} width="100%" />
        </article>
      </>
    );
  }
  if (invoiceId === "timon") {
    return (
      <>
        <h1>Timon - Hoe ziet onze communicatie er uit binnen 20 jaar?</h1>
        <article>
          Onze communicatie zou er binnen 20 jaar totaal anders uit kunnen zien
          dan we vandaag gewend zijn. Vooral hersenimplantaten kunnen onze
          communicatie nog een pak directer maken, zonder enige moeite. Om het
          ‘faster & better’ credo te doorbreken zou er een artificiële schaarste
          aan deze communicatie kunnen worden verbonden om de authenticiteit van
          sociale uitwisselingen niet in het gedrang te brengen. Zo zou je op
          een dag slechts 10 berichten kunnen sturen, zodat je een beetje dat
          postkaartgevoel krijgt en je goed moet nadenken over wat je stuurt.
          <br />
          <br />
          Ook afspraken voor evenementen zouden er anders uit kunnen zien. Als
          een AI weet wat jij leuk vind kan het op basis van interesses van jouw
          vrienden inschatten met wie je naar welk evenement kan gaan. Dit moet
          natuurlijk gebeuren binnen de perken van het mogelijke, zodat de
          privacy en autonomie gewaarborgd blijven.
        </article>
      </>
    );
  }
  if (invoiceId === "chatroom") {
    return (
      <>
        <h1>Fysieke Chatroom in de openbare ruimte</h1>
        <p className="description">
        Hoe kunnen we de oude chatroom (en zijn glorie) vertalen naar de publieke ruimte?   <br /><br />
        Foto door Marche via re-how.
          <img
            width="100%"
            alt="open space"
            src="https://re-how.net/wp-content/uploads/2021/04/d40949-2-631287-1.jpg"
          />
        </p>
      </>
    );
  }
  if (invoiceId === "modereren") {
    return (
      <div style={{width:"70vh", margin: "8vh auto"}}>
        <a href="mailto:finlay.degrauwe@student.luca-arts.be"><Modereren /><small style={{textAlign:'center',width:"100%",display:"inline-block"}}>Klik op de bubbel om contact op te nemen via email</small></a>
      </div>
    );
  }
  if (invoiceId === "geert") {
    return (
      <>
        <h1>
          Geert - Hoe behouden we onze autonomie binnen een sterk
          gedigitaliseerde wereld?
        </h1>
        <article>
          Sociale media werkt polariserend. Het is moeilijk om in te schatten
          wat mensen net bedoelen als ze een bericht plaatsen. Tekst is een
          mager medium in vergelijking met face to face communicatie, waar er
          veel meer emoties en non-verbale uitwisselingen zijn. Je bent vooral
          met jezelf bezig als je op sociale media zit en minder met hoe de
          ander jouw bericht zou interpreteren. Videobellen is bijvoorbeeld al
          een beter alternatief, omdat het directer is en er minder ruis kan
          zijn. <br /> <br /> Om jouw communicatie te filteren zou je kunnen
          werken met kleurcodes. Bijvoorbeeld:{" "}
          <ul>
            <li>Groen = familie</li>
            <li>Oranje = spammails</li>
            <li>Geel = advertenties</li>
            <li>Blauw = vereniging</li>
          </ul>
          <br />
          Het feit dat je vandaag zelf kan kiezen naar hoe en wie je
          communiceert en daarbij een groot publiek kan bereiken is totaal
          anders dan pakweg 50 jaar geleden. Toen had enkel televisie de kracht
          om zo’n grote mensenmassa aan te spreken. We moeten vooral blijven
          nadenken over hoe we willen dat zo’n internet eruit ziet en daarbij
          zelf onze autonomie durven eisen.
        </article>
      </>
    );
  }
  if (invoiceId === "methodiek") {
    return (
      <>
        <h1>De wandelmethodiek</h1>
        <p class="description">
          Voor informatie participatief te ontsluiten is er een methodiek om al
          wandelend het cocreatieproces aan te gaan. Deze kun je hieronder
          raadplegen.
        </p>
        <table>
          <tbody>
            <tr>
              <td width="21%">
                <p>Tijdsinschatting</p>
              </td>
              <td width="78%">
                <p>Wat</p>
              </td>
            </tr>
            <tr>
              <td width="21%">
                <p>2 minuten</p>
              </td>
              <td width="78%">
                <p>
                  <strong>Uitleggen methodiek &amp; project</strong>
                </p>
                <p>
                  We beginnen in het verleden bij de romeinen en gaan daarna
                  langs het heden naar de toekomst
                </p>
              </td>
            </tr>
            <tr>
              <td width="21%">
                <p>5 minuten</p>
              </td>
              <td width="78%">
                <p>
                  <strong>Verleden</strong>
                </p>
                <p>
                  De romeinen hebben een grote invloed gehad op onze beschaving
                </p>
                <p>
                  Fora uitleggen &gt; plekken om samen te komen, handel te
                  drijven, politiekers te horen debatteren
                </p>
                <p>
                  Andere centrale factor in sociaal leven van romeinen waren de
                  balnea =&gt; elke namiddag kwamen mensen uit de buurt hier
                  samen om te ontspannen, praten, tot rust te komen
                </p>
              </td>
            </tr>
            <tr>
              <td width="21%">
                <p>5 minuten</p>
              </td>
              <td width="78%">
                <p>
                  <strong>Sociale media zijn verslavend</strong>
                </p>
                <p>Huidige speelveld sociale media uitleggen</p>
                <p>
                  -{" "}
                  <em>
                    Wat zijn jouw ervaringen met sociale media? Wat vind je
                    goed, wat vind je slecht?
                  </em>
                </p>
              </td>
            </tr>
            <tr>
              <td width="21%">
                <p>15 minuten</p>
              </td>
              <td width="78%">
                <p>
                  <strong>Sociale media voor de toekomst</strong>
                </p>
                <p>
                  Stel we gaan 20 jaar verder in de tijd. Jij bent de CEO van
                  een lokale sociale media-startup, en je hebt van een
                  investeerder 100.000 euro gekregen om een product te
                  ontwikkelen dat het sociale welzijn van mensen bevorderd.{" "}
                  <em>Wat zou jij doen? </em>Teken, praat, maak een collage,
                  &hellip;
                </p>
                <p>
                  - <em>Hoe kan sociale media er uit zien binnen 20 jaar?</em>
                </p>
                <p>
                  -{" "}
                  <em>
                    Hoe kunnen we dit gebruiken voor vrienden maken, contacten
                    te leggen in uw buurt, op de hoogte blijven met familie?
                  </em>
                </p>
                <p>
                  - <em>Hoe werkt vertrouwen binnen dit nieuwe model?</em>
                </p>
              </td>
            </tr>
            <tr>
              <td width="21%">
                <p>5 minuten</p>
              </td>
              <td width="78%">
                <p>
                  <strong>Terugkoppelen</strong>
                </p>
                <p>
                  - <em>Wat vond je van de methodiek?</em>
                </p>
                <p>
                  - <em>Kleur kiezen</em>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
  if (invoiceId === "camera") {
    return (
      <>
        <h1>Ervaar hoe camera’s jouw leven op de voet volgen </h1>
        <p class="description">
          Watch your step is een concept voor een fysieke installatie. Foto door
          Lianhao Qu via Unsplash. <br /> <br />{" "}
          <img alt="cameras" src={Cameras} width="100%" />
        </p>
      </>
    );
  }
  if (invoiceId === "bob") {
    return (
      <>
        <h1>Bob - Wat is de plek van kunstenaars in een mixed reality?</h1>
        <article>
          In een toekomst waar mixed reality een gevestigde waarde is binnen
          onze samenleving biedt dat veel mogelijkheden voor artiesten en
          creatievelingen. Je kan open ateliers creëren waar iedereen welkom is
          om een kijkje te nemen naar wat jij maakt. NFT’s zijn hier een begin
          van, maar hebben ook binnen de fysieke wereld, nog veel meer
          mogelijkheden naar de toekomst toe. Ook stadstouren en andere
          ervaringen buiten kunnen met mixed reality aan populariteit winnen.
          Privacy is daarbij niet al te belangrijk, omdat er altijd wel
          instanties zullen zijn die waken over wat wel en niet kan. Het is wel
          belangrijk dat technologie zich blijft ontwikkelen op een transparante
          manier en dat de black box, alles waar je geen vat op hebt, niet enkel
          maar groter en groter wordt.
        </article>
      </>
    );
  }
  if (invoiceId === "verbonden") {
    return (
      <div style={{width:"70vh", margin: "8vh auto"}}>
        <a href="mailto:finlay.degrauwe@student.luca-arts.be"><Verbonden /><small style={{textAlign:'center',width:"100%",display:"inline-block"}}>Klik op de bubbel om contact op te nemen via email</small></a>
      </div>
    );
  }
  if (invoiceId === "commons") {
    return (
      <>
        <h1>hoe kunnen Common-principes vertaald worden naar UX Design ?</h1>
        <p className="description">
          Commons zijn methodes om op een transparante en horizontale manier
          samen te werken. Dankzij blockchain en andere gedecentraliseerde
          open-source technieken kunnen we tegenwoordig een hele back-end
          opzetten zonder beroep te doen op gecentraliseerde servers. Enkel het
          front-end verhaal hinkt nog achterop. Door middel van deze
          exploratieve designoefening wil ik ontdekken hoe een
          gedecentraliseerde front-end eruit zou kunnen zien. <br /> <br />
          <img alt="cameras" src={UX} width="100%" />
        </p>
      </>
    );
  }
  if (invoiceId === "fedrik") {
    return (
      <>
        <h1>
          Fedrik - Hoe koppelen we onze digitale acties aan de fysieke wereld?
        </h1>
        <article>
          Het wordt vandaag de dag moeilijker en moeilijker om niet
          gedissocieerd te worden van de echte wereld. We brengen een groot deel
          van onze dagen door in alternatieve digitale werelden waar we in huid
          kruipen van een avatar of ons digitale spiegelbeeld. We moeten zoeken
          naar manieren om deze twee werelden bijeen te houden zodat we de
          consequenties van ons handelen ook kunnen voelen. Een ludieke manier
          om dat te doen is door jouw publieke online activiteit te projecteren
          op jouw gevel. Zo wordt jouw Facebookwall ook jouw echte gevel.
        </article>
        <p className="description">
          Liminal Conversations van Proximity Collective. Afbeelding door
          Yandell Walton.
          <img
            width="100%"
            alt="text on house"
            src="https://arts.yarracity.vic.gov.au/-/media/all-images/yarra-arts/news/cpaimageresized.png?h=1027&la=en&w=1500&hash=FEE830EE7265DD4B3EFA8E8963BEDB44F3E5676B"
          />
        </p>
      </>
    );
  }
  if (invoiceId === "sieglinde") {
    return (
      <>
        <h1>
          Sieglinde - Hoe kunnen we het internet modereren op een democratische
          manier?
        </h1>
        <article>
          We merken overal dat het moeilijker en moeilijker wordt om het
          internet veilig en tegelijk open te houden. Politieke agenda’s raken
          meer en meer vervlochten met de platformen waarop wij ons begeven. Er
          bestaan nog niet veel services waarbij de inhoud op een democratische
          manier gefilterd wordt. Het huidige alternatief zijn vaak
          gecentraliseerde instanties of een selecte groep moderatoren die niet
          transparant te werk gaan. We zouden in de plaats van Captcha’s filters
          moeten maken die polsen naar de intenties van mensen alvorens zij een
          online omgeving betreden. Met behulp van gedecentraliseerde systemen
          of “neutrale AI’s” kunnen we het internet veilig en open houden voor
          iedereen. Deze filters kunnen bijvoorbeeld opereren door informatie te
          achterhalen als:{" "}
          <ul>
            <li>Ben je betrouwbaar?</li>
            <li>Heb je goede bedoelingen?</li>
            <li>Ben je om te kopen?</li>
          </ul>
          <br />
        </article>
      </>
    );
  } else {
    return (
      <>
        <h1>Oeps, pagina niet gevonden...</h1>
        <br />
      </>
    );
  }
}
