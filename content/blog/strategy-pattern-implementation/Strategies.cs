using System;

namespace Strategy_Pattern
{
	//Le varie implementazioni delle strategie

	class Strategy1 : StrategyAbstract
	{
		public override void DoSomething()
		{
			Console.WriteLine("DoSomething 1");
		}
	}

	class Strategy2 : StrategyAbstract
	{
		public override void DoSomething()
		{
			Console.WriteLine("DoSomething 2");
		}
	}
}
