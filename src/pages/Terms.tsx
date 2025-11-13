import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <Button variant="ghost" asChild className="mb-8">
          <a href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Powrót do strony głównej
          </a>
        </Button>

        <article className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            Regulamin zajęć
          </h1>

          <div className="text-muted-foreground space-y-6">
            <p className="text-sm">
              <strong>Data ostatniej aktualizacji:</strong> 1 stycznia 2025
            </p>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                1. Postanowienia ogólne
              </h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Niniejszy Regulamin określa zasady uczestnictwa w zajęciach pływania
                  organizowanych przez Szkółkę Pływania w Tomaszowie Mazowieckim.
                </li>
                <li>
                  Przystąpienie do zajęć jest równoznaczne z akceptacją wszystkich postanowień
                  niniejszego Regulaminu.
                </li>
                <li>
                  Organizator zastrzega sobie prawo do zmiany Regulaminu. Zmiany wchodzą
                  w życie w terminie wskazanym przez Organizatora, nie wcześniej jednak
                  niż po upływie 7 dni od daty ich ogłoszenia.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                2. Zapisy na zajęcia
              </h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Zapisy na zajęcia dokonywane są przez formularz kontaktowy na stronie
                  internetowej, telefonicznie lub mailowo.
                </li>
                <li>
                  Zapisanie na zajęcia wymaga wypełnienia formularza zgłoszeniowego
                  i dokonania wpłaty za karnet.
                </li>
                <li>
                  W przypadku zajęć dla dzieci poniżej 18 roku życia, zgłoszenia dokonuje
                  rodzic lub opiekun prawny.
                </li>
                <li>
                  Liczba miejsc w grupach jest ograniczona. O przyjęciu decyduje kolejność zgłoszeń.
                </li>
                <li>
                  Organizator zastrzega sobie prawo do odwołania zajęć w przypadku
                  niewystarczającej liczby uczestników (minimum 4 osoby).
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                3. Płatności i karnety
              </h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Opłata za zajęcia dokonywana jest przed rozpoczęciem kursu w formie
                  zakupu karnetu.
                </li>
                <li>
                  Karnety są ważne przez 2 miesiące od daty zakupu.
                </li>
                <li>
                  Niewykorzystane wejścia z karnetu nie podlegają zwrotowi ani przedłużeniu
                  po upływie terminu ważności.
                </li>
                <li>
                  Możliwe formy płatności: gotówka, przelew bankowy.
                </li>
                <li>
                  Organizator nie zwraca wpłaconych pieniędzy, chyba że zajęcia
                  nie dojdą do skutku z winy Organizatora.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                4. Uczestnictwo w zajęciach
              </h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Uczestnik jest zobowiązany do punktualnego stawiennictwa na zajęciach.
                </li>
                <li>
                  Uczestnik zobowiązany jest do przestrzegania zasad bezpieczeństwa
                  i higieny oraz stosowania się do poleceń instruktora.
                </li>
                <li>
                  Uczestnik powinien posiadać odpowiedni strój kąpielowy, czepek oraz obuwie
                  basenowe.
                </li>
                <li>
                  Osoby z chorobami zakaźnymi, zmianami skórnymi lub innymi schorzeniami
                  wykluczającymi korzystanie z basenu nie mogą uczestniczyć w zajęciach.
                </li>
                <li>
                  Przed pierwszymi zajęciami zalecane jest zasięgnięcie opinii lekarza
                  o braku przeciwwskazań do uprawiania pływania.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                5. Nieobecności i odrabianie zajęć
              </h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  O planowanej nieobecności należy powiadomić Organizatora najpóźniej
                  24 godziny przed zajęciami.
                </li>
                <li>
                  Możliwe jest odrobienie maksymalnie 2 zajęć w ramach ważności karnetu,
                  w terminie ustalonym z instruktorem.
                </li>
                <li>
                  Nieobecności niezgłoszone nie podlegają odrabianiu.
                </li>
                <li>
                  W przypadku nieobecności z powodu choroby poświadczonej zaświadczeniem lekarskim,
                  istnieje możliwość przedłużenia ważności karnetu o okres choroby.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                6. Odwoływanie i przenoszenie zajęć
              </h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Organizator zastrzega sobie prawo do odwołania zajęć z przyczyn losowych
                  (awaria basenu, choroba instruktora).
                </li>
                <li>
                  W przypadku odwołania zajęć z winy Organizatora, zajęcia zostaną
                  odpracowane w innym terminie.
                </li>
                <li>
                  Organizator zobowiązuje się do poinformowania uczestników o odwołaniu zajęć
                  najpóźniej na 24 godziny przed planowanymi zajęciami.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                7. Bezpieczeństwo
              </h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Organizator zapewnia opiekę wykwalifikowanego instruktora podczas zajęć.
                </li>
                <li>
                  W czasie zajęć obowiązuje bezwzględny zakaz spożywania alkoholu
                  i środków odurzających.
                </li>
                <li>
                  Dzieci do 12 roku życia powinny być odbierane przez rodziców/opiekunów
                  bezpośrednio po zakończeniu zajęć.
                </li>
                <li>
                  Organizator nie ponosi odpowiedzialności za przedmioty wartościowe
                  pozostawione w szatni.
                </li>
                <li>
                  Uczestnik bierze udział w zajęciach na własną odpowiedzialność
                  i zobowiązuje się przestrzegać zasad bezpieczeństwa.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                8. Odpowiedzialność
              </h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Organizator nie ponosi odpowiedzialności za urazy i kontuzje powstałe
                  wskutek nieprzestrzegania przez uczestnika zasad bezpieczeństwa
                  i poleceń instruktora.
                </li>
                <li>
                  Uczestnik zobowiązany jest do naprawienia szkód wyrządzonych na basenie
                  lub w jego otoczeniu z własnej winy.
                </li>
                <li>
                  Rodzice/opiekunowie ponoszą pełną odpowiedzialność materialną
                  za szkody wyrządzone przez dzieci uczestniczące w zajęciach.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                9. Rezygnacja z zajęć
              </h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Uczestnik ma prawo zrezygnować z zajęć w każdym momencie.
                </li>
                <li>
                  Rezygnacja wymaga złożenia pisemnego oświadczenia (e-mail, formularz).
                </li>
                <li>
                  W przypadku rezygnacji z zajęć, wpłacone kwoty nie podlegają zwrotowi,
                  z wyjątkiem sytuacji określonych w punkcie 3.5.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                10. Ochrona danych osobowych
              </h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Dane osobowe uczestników są przetwarzane zgodnie z obowiązującą
                  Polityką Prywatności.
                </li>
                <li>
                  Organizator może dokumentować zajęcia w formie zdjęć i filmów
                  w celach promocyjnych (po uzyskaniu zgody uczestników).
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                11. Postanowienia końcowe
              </h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają
                  przepisy Kodeksu Cywilnego.
                </li>
                <li>
                  Wszelkie spory rozstrzygane będą przez sąd właściwy dla siedziby Organizatora.
                </li>
                <li>
                  Organizator zastrzega sobie prawo do interpretacji zapisów Regulaminu.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                12. Kontakt
              </h2>
              <p>
                W przypadku pytań dotyczących Regulaminu prosimy o kontakt:
              </p>
              <p>
                <strong>E-mail:</strong> kontakt@szkolka-plywania.pl
                <br />
                <strong>Telefon:</strong> +48 123 456 789
                <br />
                <strong>Adres:</strong> ul. Przykładowa 12, 97-200 Tomaszów Mazowiecki
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Terms;
