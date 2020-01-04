
namespace Strategy_Pattern
{

	public class StrategyContext
	{
		/// <summary>
		/// Riferimento alla strategia corrente
		/// </summary>
		private StrategyAbstract _strategy;

		/// <summary>
		/// Metodo che setta la strategia runtime
		/// </summary>
		/// <param name="strategy"></param>
		public void SetStrategy(StrategyAbstract strategy)
		{
			_strategy = strategy;
		}

		/// <summary>
		/// Il metodo che viene effettivamente chiamato
		/// e che poi richiamerà il metodo della strategia settata correntemente
		/// </summary>
		public void PerformDoSomething()
		{
			_strategy.DoSomething();
		}

	}
}
