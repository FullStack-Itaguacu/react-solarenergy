import { LineChart } from "../../components/grafico/LineChart"
import DashboardCards from "../../components/dashboardCards/dashboardCards"

export const Dashboard = () => {
  return (
    <div>
      <DashboardCards />
      <LineChart />
    </div>
  )
}
