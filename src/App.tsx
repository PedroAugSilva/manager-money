import Global from "./styles/Global";
import { useState } from "react";
import { Main } from "./styles/app";
import { ThemeProvider } from "styled-components";
import Historic from "./components/Hstoric";
import light from "./styles/theme/light";
import BalancePreview from "./components/BalancePreview";
import LatestTransections from "./components/latestTransactions";
import NewTransactionModal from "./components/NewTransactionModal";
import { AiOutlinePlus } from "react-icons/ai";
import { AnimatePresence } from "framer-motion";
import { TransactionsProvider } from "./contexts/transactions";

function App() {
  const [modalShow, setModal] = useState(false);
  
  
  return (
    <TransactionsProvider>
      <ThemeProvider theme={light}>
        <AnimatePresence>
          {modalShow && <NewTransactionModal setModal={setModal} />}
        </AnimatePresence>
        
        <Main>
          <aside>
            <Historic subject="Wallet" />
            <Historic subject="Transactions" />
          </aside>
          <section>
            <BalancePreview />
            <div className="transactions">
              <div className="new-transaction">
                <button
                  className="button-new-transaction"
                  onClick={() => setModal(true)}
                >
                  <AiOutlinePlus />
                  New transaction
                </button>
              </div>
              <div className="transactions-itens">
                <LatestTransections/>
              </div>
            </div>
          </section>

          <Global />
        </Main>
      </ThemeProvider>
    </TransactionsProvider>
  );
}
export default App;
