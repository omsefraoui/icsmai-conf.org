# L'IA médicale, pas à pas — version simplifiée
ICSMAI 2027 · Saïdia · atelier pratique

Parcours de 9 étapes courtes (une idée par écran, un seul réglage, un mini-quiz corrigé), organisé
selon les 4 blocs de l'atelier, puis un bilan avec fiche à télécharger.

## Lancer
```
pip install -r requirements.txt
streamlit run app_simple.py
```
Pour toute la salle, sur l'ordinateur de l'animateur relié au Wi-Fi :
`streamlit run app_simple.py --server.address 0.0.0.0` puis ouvrir `http://<IP-animateur>:8501`.

## Le parcours
| Bloc | Étapes |
|---|---|
| 1 · Comprendre | 1. Les données de santé · 2. Apprendre, pas apprendre par cœur |
| 2 · Construire | 3. Entraîner puis tester · 4. À vous de jouer dans Orange |
| 3 · Interpréter | 5. Le seuil d'alerte · 6. La valeur d'une alerte (VPP) · 7. Le risque d'un patient |
| 4 · Décider | 8. Un risque juste, ailleurs aussi · 9. Avant d'utiliser une IA |

Les patients (simulés) sont exactement ceux de la version complète `app.py` et du kit Orange
`kit_orange_icsmai2027.zip` : les deux applications peuvent être utilisées dans le même atelier,
la version simplifiée pour tous, la version complète pour les participants qui veulent aller plus loin.
