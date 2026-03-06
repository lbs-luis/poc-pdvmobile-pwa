import {
  ClipboardList,
  CreditCard,
  FileText,
  Globe,
  Info,
  LogIn,
  PackageSearch,
  Printer,
  Receipt,
  RotateCcw,
  Search,
  ShoppingCart,
  Store,
  X,
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { MenuButton } from '../../components/menu-button'

export default function HomeScreen() {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-dvh flex-col bg-white">
      <header className="bg-[#1a1f3c] px-4 pt-8 pb-4">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold text-white">Software Show PDV</h1>
          <span className="text-lg font-bold text-white">PDV 01</span>
        </div>
        <div className="mt-2 flex items-center gap-2">
          <span className="rounded-md bg-indigo-200 p-1">
            <Store
              size={17}
              className="shrink-0 text-blue-800"
              strokeWidth={2}
            />
          </span>
          <span className="text-sm font-normal text-white">
            9999 - Mega Itapevi Chocolates
          </span>
        </div>
      </header>

      <div className="mx-4 mt-4 rounded-lg border border-neutral-200 bg-white p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-blue-900">Meta do dia</span>
          <span className="text-sm font-bold text-blue-900">76,4%</span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-blue-200">
          <div className="h-full w-[76.4%] bg-blue-900" />
        </div>
        <div className="mt-1 flex justify-between">
          <span className="text-xs text-neutral-500">19.000,00</span>
          <span className="text-xs text-blue-900">23.000,00</span>
        </div>
      </div>

      <div className="grid flex-1 grid-cols-3 gap-3 p-4">
        <MenuButton
          icon={<Search size={40} strokeWidth={1.4} />}
          label="Pesquisar"
          onClick={() => navigate('/product-search')}
        />
        <MenuButton
          icon={<LogIn size={40} strokeWidth={1.4} />}
          label="Abrir PDV"
          onClick={() => navigate('/cart')}
        />
        <MenuButton
          icon={<PackageSearch size={40} strokeWidth={1.4} />}
          label="Consultar produto"
          onClick={() => navigate('/cart')}
        />

        <MenuButton
          icon={<ShoppingCart size={40} strokeWidth={1.4} />}
          label="Pré-Venda"
          onClick={() => {}}
        />
        <MenuButton
          icon={<X size={40} strokeWidth={1.4} />}
          label="Cancelar Vendas"
          onClick={() => {}}
        />
        <MenuButton
          icon={<CreditCard size={40} strokeWidth={1.4} />}
          label="TEF"
          onClick={() => {}}
        />

        <MenuButton
          icon={<RotateCcw size={40} strokeWidth={1.4} />}
          label="Restaurar Sistema"
          onClick={() => {}}
        />
        <MenuButton
          icon={<Receipt size={40} strokeWidth={1.4} />}
          label="Recibos"
          onClick={() => {}}
        />
        <MenuButton
          icon={<FileText size={40} strokeWidth={1.4} />}
          label="Menu Fiscal"
          onClick={() => {}}
        />

        <MenuButton
          icon={<Printer size={40} strokeWidth={1.4} />}
          label="Reimprimir NFe"
          onClick={() => {}}
        />
        <MenuButton
          icon={<Printer size={40} strokeWidth={1.4} />}
          label="Re-imprimir Cupom"
          onClick={() => {}}
        />
        <MenuButton
          icon={<Globe size={40} strokeWidth={1.4} />}
          label="Pedidos Online"
          onClick={() => {}}
        />

        <MenuButton
          icon={<ClipboardList size={40} strokeWidth={1.4} />}
          label="Comandas"
          onClick={() => {}}
        />
        <MenuButton
          icon={<Info size={40} strokeWidth={1.4} />}
          label="Sobre"
          onClick={() => {}}
        />
      </div>
    </div>
  )
}
