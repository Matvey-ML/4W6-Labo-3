"use client";

import { useState } from "react";
import { Song } from "./_types/song";
import axios from "axios";

export default function Home() {

  // Pour obtenir l'input de l'utilisateur
  const [artistName, setArtistName] = useState<string>("");
  const [genre, setGenre] = useState<string>("");

  // Pour afficher les données
  const [similarArtists, setSimilarArtists] = useState<string[]>([]);
  const [songs, setSongs] = useState<Song[]>([]);
  

  const [api , setApi] = useState("9a8a3facebbccaf363bb9fd68fa37abf")

  // Requête #1
  async function getSimilarArtists(){
    const response = await axios.get("http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist="+ artistName +"&limit=20&api_key="+ api +"&format=json")
    console.log(response.data)
    
    let artistList : string[] = [];
    
    for(let a of response.data.similarartists.artist){
      artistList.push(a.name)
    }
    
    setSimilarArtists(artistList)
  }

  // Requête #2
  async function getTopSongs(){
    const response = await axios.get("http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag="+ genre +"&limit=20&api_key="+ api +"&format=json")
    console.log(response.data)

    let songList : Song[] = [];
    for(let s of response.data.tracks.track){
      songList.push(new Song(s.name, s.artist.name, s.duration))
    }
    setSongs(songList)
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
            <input onChange={(e) => setArtistName(e.target.value)} type="text" className="px-1 py-0.5 bg-zinc-100 rounded-sm border-1 mx-2 text-zinc-900 text-sm border-zinc-500" placeholder="Nana Mouskouri" />
            <button onClick={getSimilarArtists} className="bg-zinc-300 rounded-md border-zinc-500 border-1 cursor-pointer px-2 py-0 text-zinc-900 active:bg-zinc-400">Chercher</button>
          </div>
          <hr className="text-zinc-400 my-2" />

          {/* Données */}
          <div className="text-xl">Résultats :</div>
          <ul className="list-disc ml-4 text-sm">
            {similarArtists.map(
              (i) => <li key={i}>{i}</li>
            )}
            
          </ul>
        </div>

        {/* Colonne pas à gauche : Obtenir les meilleurs chansons d'un genre */}
        <div className="flex-1 bg-zinc-700 p-2 rounded-lg">

          {/* Formulaire */}
          <div className="flex items-center">
            <span className="font-bold">Genre :</span>
            <input onChange={(e) => setGenre(e.target.value)} type="text" className="px-1 py-0.5 bg-zinc-100 rounded-sm border-1 mx-2 text-zinc-900 text-sm border-zinc-500" placeholder="pop" />
            <button onClick={getTopSongs} className="bg-zinc-300 rounded-md border-zinc-500 border-1 cursor-pointer px-2 py-0 text-zinc-900 active:bg-zinc-400">Chercher</button>
          </div>

          <hr className="text-zinc-400 my-2" />

          {/* Données */}
          <div className="text-xl">Résultats :</div>
          <ul className="list-disc ml-4 text-sm">
            {songs.map(
              (i) => <li key={i.name}>{i.name} | {i.artist} | ({i.duration} secondes)</li>
            )}
          </ul>
        </div>

      </div>
    </div>
  );
}
