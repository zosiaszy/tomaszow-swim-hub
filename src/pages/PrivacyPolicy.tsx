import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
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
            Polityka Prywatności
          </h1>

          <div className="text-muted-foreground space-y-6">
            <p className="text-sm">
              <strong>Data ostatniej aktualizacji:</strong> 1 stycznia 2025
            </p>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                1. Administrator danych osobowych
              </h2>
              <p>
                Administratorem danych osobowych zbieranych za pośrednictwem strony internetowej
                jest Szkółka Pływania z siedzibą w Tomaszowie Mazowieckim, ul. Przykładowa 12,
                97-200 Tomaszów Mazowiecki.
              </p>
              <p>
                <strong>Kontakt:</strong>
                <br />
                E-mail: kontakt@szkolka-plywania.pl
                <br />
                Telefon: +48 123 456 789
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                2. Zakres zbieranych danych
              </h2>
              <p>
                Zbieramy następujące dane osobowe użytkowników:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Imię i nazwisko</li>
                <li>Adres e-mail</li>
                <li>Numer telefonu</li>
                <li>Wiek dziecka (w przypadku zapisów na zajęcia)</li>
                <li>Dane techniczne (adres IP, typ przeglądarki, system operacyjny)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                3. Cel przetwarzania danych
              </h2>
              <p>
                Dane osobowe są przetwarzane w następujących celach:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Realizacja usług (zapisy na zajęcia, kontakt z klientami)</li>
                <li>Marketing bezpośredni (newsletter, informacje o promocjach)</li>
                <li>Zapewnienie bezpieczeństwa i prawidłowego funkcjonowania strony</li>
                <li>Wypełnienie obowiązków prawnych administratora</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                4. Podstawa prawna przetwarzania
              </h2>
              <p>
                Przetwarzanie danych osobowych odbywa się na podstawie:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Zgody osoby, której dane dotyczą (art. 6 ust. 1 lit. a RODO)</li>
                <li>Realizacji umowy (art. 6 ust. 1 lit. b RODO)</li>
                <li>Prawnie uzasadnionego interesu administratora (art. 6 ust. 1 lit. f RODO)</li>
                <li>Wypełnienia obowiązków prawnych (art. 6 ust. 1 lit. c RODO)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                5. Okres przechowywania danych
              </h2>
              <p>
                Dane osobowe będą przechowywane przez okres niezbędny do realizacji celów,
                w jakich zostały zebrane, a po tym czasie przez okres wynikający z przepisów prawa
                oraz uzasadnionego interesu administratora.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                6. Prawa użytkownika
              </h2>
              <p>
                Użytkownik ma prawo do:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Dostępu do swoich danych osobowych</li>
                <li>Sprostowania (poprawiania) danych</li>
                <li>Usunięcia danych ("prawo do bycia zapomnianym")</li>
                <li>Ograniczenia przetwarzania danych</li>
                <li>Przenoszenia danych</li>
                <li>Wniesienia sprzeciwu wobec przetwarzania</li>
                <li>Cofnięcia zgody w dowolnym momencie</li>
                <li>Wniesienia skargi do organu nadzorczego (UODO)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                7. Odbiorcy danych
              </h2>
              <p>
                Dane osobowe mogą być udostępniane:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Dostawcom usług IT (hosting, maintenance)</li>
                <li>Podmiotom świadczącym usługi księgowe i prawne</li>
                <li>Organom państwowym na podstawie przepisów prawa</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                8. Bezpieczeństwo danych
              </h2>
              <p>
                Administrator stosuje odpowiednie środki techniczne i organizacyjne zapewniające
                bezpieczeństwo przetwarzanych danych osobowych, w szczególności zabezpieczenia
                przed nieuprawnionym dostępem, utratą, zniszczeniem lub modyfikacją danych.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                9. Zmiany w Polityce Prywatności
              </h2>
              <p>
                Administrator zastrzega sobie prawo do wprowadzania zmian w Polityce Prywatności.
                O wszelkich zmianach użytkownicy zostaną poinformowani na stronie internetowej.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
                10. Kontakt
              </h2>
              <p>
                W przypadku pytań dotyczących przetwarzania danych osobowych lub realizacji praw
                przysługujących na mocy RODO, prosimy o kontakt:
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

export default PrivacyPolicy;
