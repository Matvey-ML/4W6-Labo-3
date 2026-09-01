"use client";

import { useState } from "react";
import { Song } from "./_types/song";

export default function Home() {

  // Pour obtenir l'input de l'utilisateur
  const [artistName, setArtistName] = useState<string>("");
  const [genre, setGenre] = useState<string>("");

  // Pour afficher les données
  const [similarArtists, setSimilarArtists] = useState<string[]>([]);
  const [songs, setSongs] = useState<Song[]>([]);

  // Requête #1
  async function getSimilarArtists(){

  }

  // Requête #2
  async function getTopSongs(){

  }

  return (
    <div className="w-5xl m-auto mt-2">
      <div className="bg-zinc-700 py-4 px-2 rounded-lg text-4xl">
        🎵 Laboratoire 3
      </div>
      <div className="flex gap-2 mt-2">

        {/* Colonne à gauche : Obtenir les artistes similaires */}
        <div className="flex-1 bg-zinc-700 p-2 rounded-lg">

          {/* Formulaire */}
          <div className="flex items-center">
            <span className="font-bold">Artiste :</span>
            <input type="text" className="px-1 py-0.5 bg-zinc-100 rounded-sm border-1 mx-2 text-zinc-900 text-sm border-zinc-500" placeholder="Nana Mouskouri" />
            <button className="bg-zinc-300 rounded-md border-zinc-500 border-1 cursor-pointer px-2 py-0 text-zinc-900 active:bg-zinc-400">Chercher</button>
          </div>
          <hr className="text-zinc-400 my-2" />

          {/* Données */}
          <div className="text-xl">Résultats :</div>
          <ul className="list-disc ml-4 text-sm">
            <li>NOM_ARTISTE</li>
            <li>NOM_ARTISTE</li>
            <li>etc.</li>
          </ul>
        </div>

        {/* Colonne pas à gauche : Obtenir les meilleurs chansons d'un genre */}
        <div className="flex-1 bg-zinc-700 p-2 rounded-lg">

          {/* Formulaire */}
          <div className="flex items-center">
            <span className="font-bold">Genre :</span>
            <input type="text" className="px-1 py-0.5 bg-zinc-100 rounded-sm border-1 mx-2 text-zinc-900 text-sm border-zinc-500" placeholder="pop" />
            <button className="bg-zinc-300 rounded-md border-zinc-500 border-1 cursor-pointer px-2 py-0 text-zinc-900 active:bg-zinc-400">Chercher</button>
          </div>

          <hr className="text-zinc-400 my-2" />

          {/* Données */}
          <div className="text-xl">Résultats :</div>
          <ul className="list-disc ml-4 text-sm">
            <li>NOM_CHANSON de NOM_ARTISTE (DURÉE_CHANSON secondes)</li>
            <li>NOM_CHANSON de NOM_ARTISTE (DURÉE_CHANSON secondes)</li>
            <li>etc.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
