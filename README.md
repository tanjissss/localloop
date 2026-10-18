# LocalLoop Ionic + Capacitor

Application Ionic/Capacitor conçue pour iPhone. Les photos, vidéos, likes et commentaires restent dans le bac privé de l’application, sans compte ni backend. Le sélecteur natif n’accorde accès qu’aux éléments choisis; aucun accès global à la photothèque n’est demandé.

## Obtenir une app iOS sans avoir de Mac

Le dossier `.github/workflows/ios-archive.yml` compile le projet sur un Mac hébergé par GitHub Actions. Après avoir mis `LocalLoopIonic` dans un dépôt GitHub :

1. Pousse les fichiers sur la branche `main`.
2. Dans GitHub, ouvre **Actions** puis **iOS archive (unsigned)**.
3. Attends que le workflow vert finisse, puis télécharge l’artefact **LocalLoop-iOS**.
4. L’artefact contient `LocalLoop.xcarchive.zip` et `LocalLoop-unsigned.ipa`.

Le workflow prépare l’app Capacitor, construit le bundle web, exécute Xcode sur le runner macOS, puis archive sans signature. GitHub Actions prend en charge les runners macOS et les artefacts de sortie ([runners](https://docs.github.com/en/actions/how-tos/write-workflows/choose-where-workflows-run/choose-the-runner-for-a-job), [artefacts](https://docs.github.com/en/actions/concepts/workflows-and-actions/workflow-artifacts)).

L’IPA non signé est destiné à TrollStore seulement si ton iPhone/iOS est compatible. Il ne s’installe pas normalement via TestFlight ou l’App Store. La création de l’archive dans le cloud ne signifie pas que l’app a déjà été exécutée sur un iPhone; le build devra réussir dans GitHub Actions.

## Développement web dans Docker

Avec Docker Desktop démarré, depuis ce dossier :

```sh
docker compose up --build
```

Puis ouvre `http://localhost:5173`. C’est uniquement l’aperçu navigateur; le sélecteur iOS natif nécessite l’app Capacitor installée.

## Musique et confidentialité

La recherche sans clé utilise l’API publique iTunes Search d’Apple. Des extraits de prévisualisation peuvent être écoutés quand Apple les fournit; le bouton Apple ouvre la page du morceau. Les mots recherchés et les requêtes d’extraits vont à Apple. Les médias choisis ne sont jamais envoyés. Les images des publications de démonstration sont chargées depuis Unsplash; les publications personnelles restent locales.

Les médias importés sont copiés dans `Directory.LibraryNoCloud`, affichés avec `Capacitor.convertFileSrc()`, et les interactions restent dans les préférences de l’app. Le sélecteur de médias et Filesystem suivent les API Capacitor officielles ([Filesystem](https://capacitorjs.com/docs/apis/filesystem), [Capawesome File Picker](https://github.com/capawesome-team/capacitor-file-picker)).
