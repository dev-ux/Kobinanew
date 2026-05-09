import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import Navbar from './Navbar';

const CGU = () => {
  return (
    <div className="min-h-screen bg-[#0a0a1a] text-gray-300">
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button
            variant="ghost"
            className="mb-6 text-gray-400 hover:text-white"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour
          </Button>
          
          <h1 className="text-4xl font-bold text-white mb-2">Conditions Générales d'Utilisation</h1>
          <p className="text-gray-400 mb-12">En vigueur au 24 juillet 2024</p>
          
          <div className="prose prose-invert max-w-none">
            <section className="mb-12">
              <p className="mb-6">
                Les présentes conditions générales d'utilisation (dites « CGU ») ont pour objet l'encadrement juridique des modalités de mise à disposition du site et des services par KobinaTech et de définir les conditions d'accès et d'utilisation des services par « l'Utilisateur ».
              </p>
              <p>
                Toute inscription ou utilisation du site implique l'acceptation sans aucune réserve ni restriction des présentes CGU par l'utilisateur. Lors de l'inscription sur le site via le Formulaire d'inscription, chaque utilisateur accepte expressément les présentes CGU en cochant la case précédant le texte suivant : « Je reconnais avoir lu et compris les CGU et je les accepte ».
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-white">1. Accès au site</h2>
              <p>
                Le site est accessible gratuitement en tout lieu à tout Utilisateur ayant un accès à Internet. Tous les frais supportés par l'Utilisateur pour accéder au service (matériel informatique, logiciels, connexion Internet, etc.) sont à sa charge.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-white">2. Propriété intellectuelle</h2>
              <p>
                Les marques, logos, signes et tout autre contenu du site font l'objet d'une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d'auteur.
              </p>
              <p className="mt-4">
                L'Utilisateur sollicite l'autorisation préalable du site pour toute reproduction, publication, copie des différents contenus.
              </p>
              <p className="mt-4">
                Toute utilisation non autorisée du site ou de l'un des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-white">3. Services fournis</h2>
              <p>
                KobinaTech s'efforce de fournir sur le site des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
              </p>
              <p className="mt-4">
                Tous les informations indiquées sur le site kobinatech.com sont données à titre indicatif, et sont susceptibles d'évoluer. Par ailleurs, les renseignements figurant sur le site kobinatech.com ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-white">4. Responsabilité</h2>
              <p>
                Les sources des informations diffusées sur le site kobinatech.com sont réputées fiables mais le site ne garantit pas qu'il soit exempt de défauts, d'erreurs ou d'omissions.
              </p>
              <p className="mt-4">
                L'utilisateur utilise les informations et contenus disponibles sur le site à ses seuls risques et périls. L'utilisateur est seul responsable de l'utilisation qu'il fait du service et KobinaTech ne pourra en aucun cas être tenu pour responsable de tout dommage à l'utilisateur ou à un tiers.
              </p>
              <p className="mt-4">
                KobinaTech ne pourra être tenu responsable en cas de défaillance, panne, difficulté ou interruption de fonctionnement, empêchant l'accès au site ou à une de ses fonctionnalités.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-white">5. Liens hypertextes</h2>
              <p>
                Des liens hypertextes peuvent être présents sur le site. L'Utilisateur est informé qu'en cliquant sur ces liens, il sortira du site kobinatech.com. Ce dernier n'a pas de contrôle sur les pages web sur lesquelles aboutissent ces liens et ne saurait, en aucun cas, être responsable de leur contenu.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-white">6. Droit applicable et juridiction compétente</h2>
              <p>
                La législation française s'applique au présent contrat. En cas d'absence de résolution amiable d'un litige né entre les parties, les tribunaux français seront seuls compétents pour en connaître.
              </p>
              <p className="mt-4">
                Pour toute question relative à l'application des présentes CGU, vous pouvez nous joindre à l'adresse indiquée à l'article 1.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-white">7. Données personnelles</h2>
              <p>
                KobinaTech est le seul destinataire des données personnelles collectées sur le site kobinatech.com. Ces informations concernent : le nom, le prénom, l'adresse électronique, le numéro de téléphone, l'adresse postale, etc.
              </p>
              <p className="mt-4">
                Les informations recueillies font l'objet d'un traitement informatique destiné à la gestion des commandes et à la relation commerciale. Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée, vous bénéficiez d'un droit d'accès et de rectification aux informations qui vous concernent, que vous pouvez exercer en vous adressant à contact@kobinatech.com.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-white">8. Droit applicable et juridiction compétente</h2>
              <p>
                Les présentes conditions d'utilisation du site sont régies par les lois françaises et toute contestation ou litige qui pourrait naître de l'interprétation ou de l'exécution de celles-ci seront de la compétence exclusive des tribunaux dont dépend le siège social de la société KobinaTech. La langue de référence, pour le règlement de contentieux éventuels, est le français.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">9. Contact</h2>
              <p>
                Pour tout renseignement complémentaire, vous pouvez nous contacter :
              </p>
              <address className="not-italic mt-4">
                Par email : contact@kobinatech.com<br />
                Par téléphone : +225 07 89 58 23 64<br />
                Par courrier : 123 Rue de la Technologie, 75000 Paris, France
              </address>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CGU;