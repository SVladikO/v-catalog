import Header from './components/header/header.component';
import './App.style.scss';

import Introduction from './components/intro/introduction.component';

function App() {
    return (
        <div className="app">
            <Header/>
            <Introduction/>
        </div>
    );
}

export default App;
