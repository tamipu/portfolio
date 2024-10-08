import React from 'react';
import './ExperienceCard.css';

const ExperienceCard: React.FC = () => {
    return (
        <div className="experience-container">
            <div className="experience-card">
                <h3>Stage en Développement Logiciel</h3>
                <div className="experience-company">
                    @ Mycronic | Mai - Septembre 2024 | Saint-Egrève, France
                </div>
                <div className="experience-mission">
                    <p>Analyse, étude et évaluation des performances des bibliothèques JavaScript pour améliorer la visualisation des données de production dans les dashboards existants.</p>
                    <p>Collaboration en équipe de 6 dans un environnement Agile.</p>
                    <p>Développement d'un POC d'API RESTful avec Spring Boot pour présenter les dashboards et tester l'intégration de la librairie potentielle.</p>
                    <p>Développement et intégration de widgets interactifs : Remplacement des widgets existants par ceux basés sur la nouvelle librairie JavaScript, responsive design.</p>
                    <p>Mise en place de tests pour garantir la stabilité et la fiabilité des fonctionnalités.</p>
                </div>
            </div>

            <div className="experience-card">
                <h3>Admin et Ressources Humaines</h3>
                <div className="experience-company">
                    @ Yamaha Music Vietnam | Janvier 2020 - Septembre 2020 | Ho Chi Minh, Vietnam
                </div>
                <div className="experience-mission">
                    <p>Réalisation de designs internes : Conception de cartes, invitations et autres supports visuels pour des événements et des communications internes, en veillant à l'esthétique et à la clarté des informations. Veuillez trouver quelques exemples de mes designs <a href="https://phuongta.my.canva.site/portfolio" className="experience-link">ici.</a></p>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;
