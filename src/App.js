import './App.scss';

function App() {
  return (
    <div className="App">
      <header>
          <div className="header_upline">
            <ul className="h_upline h_upline_l">
                    <li className="upline_separate li_m0">
                        <img src="/images/Vector.png" alt=""></img>
                    </li>
                    <li class="separate_right">8 (812) 123-45-67</li>
                    <span class="upline_separate">|</span>
                    <li>Работаем 7дней в неделю</li>
                    <span class="upline_separate">|</span>
                    <li>9:00 — 18:00</li>
                </ul>

                <ul class="h_upline h_upline_r">
                    <li class="upline_separate">
                        <span><img src="/images/ic_sharp-log-in.svg" alt=""></img></span>
                    </li>
                    <li><span>Войти</span>/</li>
                    <li><span>Регистрация</span></li>
                </ul>

            </div>
            <div class="header_downline">
                <p class="header_logo">Porten</p>
                <ul>
                    <li>Понравилось</li>
                    <li>личный кабинет</li>
                    <li>настройки</li>
                    <li class="ul_cart"><img src="/images/bx_bx-cart.svg" alt=""></img></li>
                    <li><img src="/images/search.png" alt=""></img></li>
                </ul>
            </div>
      </header>

    </div>
  );
}

export default App;
