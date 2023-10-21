import { Await, BaseComponent } from 'amber';
import LoadingPlaceholder from '../components/loading-placeholder';

class HomePage extends BaseComponent {
  render() {
    const userRes = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          name: 'Tirtha Ahmad Nazuha'
        });
      }, 500);
    });
    return (
      <div className="page">
        <header className="home-header">
          <h1 className="back-logo-text">Bubbles Laundry</h1>
          <div className="user-profile">
            <div className="picture-user">
              <img src="./public/elaina-profile.jpg" alt="" />
            </div>
            <b>Sehat selalu</b>
            <Await resolve={userRes} onPending={<LoadingPlaceholder width="150px" height="22px" />}>
              {
                (user) =>
                  <h3>{user.name.split(' ').slice(0, 2).join(' ')}</h3>
              }
            </Await>
          </div>
        </header>
        <main className="home-main">
          <div className="home-main-con">
            <div className="member-level">
              <div className="level gold">
                <span class="material-symbols-outlined">grade</span>
                <b>Gold</b>
                <span className="value">76%</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default HomePage;
