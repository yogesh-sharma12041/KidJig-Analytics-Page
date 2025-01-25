import React from 'react'
import Header from './components/header'
import Table from './components/table'
import APIUsageCostChart from './Graphs/APICostChart'
import SpendByModelChart from './Graphs/SpendModel'
import SpendByProviderChart from './Graphs/SpendProvider'

const App = () => {
  return (
    <main>
    <Header />
    <Table />
    <APIUsageCostChart/>
    <SpendByModelChart />
    <SpendByProviderChart />
    </main>
  )
}

export default App
