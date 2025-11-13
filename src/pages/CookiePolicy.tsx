import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const CookiePolicy = () => {
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
            Polityka Cookies
          </h1>

          <div className="text-muted-foreground space-y-6">
            <p className="text-sm">
              <strong>Data ostatniej aktualizacji:</strong> 1 stycznia 2025
            </p>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                1. Czym są pliki cookie?
              </h2>
              <p>
                Pliki cookie to małe pliki tekstowe zapisywane na urządzeniu użytkownika
                (komputer, tablet, smartfon) podczas przeglądania strony internetowej.
                Umożliwiają one rozpoznanie urządzenia użytkownika i dostosowanie
                wyświetlania strony do jego indywidualnych potrzeb.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                2. Jakie rodzaje plików cookie używamy?
              </h2>

              <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
                2.1. Pliki cookie niezbędne
              </h3>
              <p>
                Te pliki są konieczne do prawidłowego funkcjonowania strony. Bez nich
                niektóre funkcje mogą nie działać poprawnie. Obejmują one:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cookies służące do zapamiętania preferencji użytkownika</li>
                <li>Cookies bezpieczeństwa</li>
                <li>Cookies sesji użytkownika</li>
              </ul>

              <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
                2.2. Pliki cookie analityczne
              </h3>
              <p>
                Umożliwiają nam analizę sposobu korzystania ze strony przez użytkowników.
                Informacje te wykorzystujemy do poprawy jakości naszej strony i lepszego
                dostosowania treści do potrzeb odwiedzających. Używamy:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Google Analytics - do analizy ruchu na stronie</li>
                <li>Cookies pozwalające na zbieranie statystyk odwiedzin</li>
              </ul>

              <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
                2.3. Pliki cookie marketingowe
              </h3>
              <p>
                Służą do wyświetlania reklam dostosowanych do zainteresowań użytkownika
                oraz mierzenia skuteczności kampanii reklamowych. Mogą być wykorzystywane przez:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Facebook Pixel</li>
                <li>Google Ads</li>
                <li>Inne platformy reklamowe</li>
              </ul>

              <h3 className="text-xl font-bold text-foreground mt-6 mb-3">
                2.4. Pliki cookie funkcjonalne
              </h3>
              <p>
                Umożliwiają zapamiętanie wyborów użytkownika (np. język, region) i zapewniają
                bardziej spersonalizowane funkcje strony.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                3. Jak długo przechowujemy pliki cookie?
              </h2>
              <p>
                W zależności od typu, pliki cookie mogą być przechowywane przez różny czas:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Cookies sesyjne:</strong> usuwane automatycznie po zamknięciu przeglądarki
                </li>
                <li>
                  <strong>Cookies trwałe:</strong> pozostają na urządzeniu przez określony czas
                  lub do momentu ich ręcznego usunięcia
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                4. Zarządzanie plikami cookie
              </h2>
              <p>
                Użytkownik może w każdej chwili zmienić ustawienia dotyczące plików cookie
                w swojej przeglądarce. Może:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Zablokować zapisywanie wszystkich plików cookie</li>
                <li>Zezwolić na zapisywanie tylko wybranych plików cookie</li>
                <li>Usunąć zapisane wcześniej pliki cookie</li>
                <li>Otrzymywać powiadomienia przed zapisaniem pliku cookie</li>
              </ul>

              <p className="mt-4">
                <strong>Jak zarządzać cookies w różnych przeglądarkach:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Chrome:</strong> Ustawienia → Prywatność i bezpieczeństwo → Pliki cookie
                </li>
                <li>
                  <strong>Firefox:</strong> Opcje → Prywatność i bezpieczeństwo → Ciasteczka
                </li>
                <li>
                  <strong>Safari:</strong> Preferencje → Prywatność → Zarządzaj danymi witryn
                </li>
                <li>
                  <strong>Edge:</strong> Ustawienia → Pliki cookie i uprawnienia witryny
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                5. Konsekwencje wyłączenia plików cookie
              </h2>
              <p>
                Wyłączenie plików cookie może wpłynąć na funkcjonalność strony.
                Niektóre funkcje mogą nie działać poprawnie lub w ogóle. W szczególności:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Może nie być możliwe zapisanie preferencji użytkownika</li>
                <li>Niektóre funkcje strony mogą nie działać</li>
                <li>Formularz kontaktowy może nie działać prawidłowo</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                6. Pliki cookie firm trzecich
              </h2>
              <p>
                Nasza strona może zawierać elementy osadzone z innych witryn (np. mapy Google,
                filmy z YouTube, przyciski mediów społecznościowych). Te elementy mogą
                ustawiać własne pliki cookie, na które nie mamy wpływu.
              </p>
              <p className="mt-4">
                Zachęcamy do zapoznania się z politykami prywatności tych serwisów:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Google: google.com/policies/privacy</li>
                <li>Facebook: facebook.com/privacy/explanation</li>
                <li>Instagram: help.instagram.com/privacy</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                7. Zmiany w Polityce Cookies
              </h2>
              <p>
                Zastrzegamy sobie prawo do wprowadzania zmian w Polityce Cookies.
                Wszelkie zmiany będą publikowane na tej stronie wraz z datą ostatniej aktualizacji.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                8. Kontakt
              </h2>
              <p>
                W przypadku pytań dotyczących naszej Polityki Cookies, prosimy o kontakt:
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

export default CookiePolicy;
