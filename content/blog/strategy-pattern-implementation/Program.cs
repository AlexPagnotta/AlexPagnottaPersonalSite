using System;

namespace Strategy_Pattern
{
	class Program
	{
		static void Main(string[] args)
		{
			//Definisco il context, la classe in cui si andrà effettivamente
			//a chiamare il metodo
			var strategyCtx = new StrategyContext();
			
			//Setto la prima strategia e lancio il metodo
			strategyCtx.SetStrategy(new Strategy1());
			strategyCtx.PerformDoSomething();

			//Setto la seconda strategia e lancio il metodo
			strategyCtx.SetStrategy(new Strategy2());
			strategyCtx.PerformDoSomething();

			Console.ReadLine();

		}
	}
}
