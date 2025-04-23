import songs from './assets/data/songs.json'
import './App.css'

function App() {

  const stopOtherAudio = (currentIndex) => {
    const audioElements = document.querySelectorAll('audio');
    audioElements.forEach((audio, index) => {
      if (index !== currentIndex) {
        audio.pause();
        audio.currentTime = 0;
      }
    });
  }

  return (
    <>
      <header>
        <h1>Hymns of the Heart</h1>
        <h2>by Loren Erickson</h2>
      </header>
      <main>
        <ul>
          {songs.map((song, index) => (
            <li key={index}>
              <div className="song">
                <h3>#{index + 1}{" "}{song.title}</h3>
                <h4>{song.subtitle}</h4>
                <p>{song.description}</p>
                <audio controls onPlay={() => stopOtherAudio(index)}>
                  <source src={`${window.location.origin}${song.audio}`} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </li>
          ))}
        </ul>
      </main>
      <footer>
        <p>
          Find more of my work at <a href="https://hymnsoftheheart.com">hymnsoftheheart.com</a>.
        </p>
      </footer>
    </>
  )
}

export default App
