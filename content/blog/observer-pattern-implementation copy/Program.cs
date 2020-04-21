using System;

namespace ObserverPattern
{
    class Program
    {
        static void Main(string[] args)
        {
            //Definisco un subject
            var subject = new Subject();

            //Definisco gli observers
            var o1 = new Observer1();
            var o2 = new Observer2();

            //Aggiungo gli observer
            subject.AddObserver(o1);
            subject.AddObserver(o2);
            
            //Setto il primo stato
            subject.SetState("State 1");

            //Verifico lo stato di entrmabi
            Console.WriteLine(o1.GetState());
            Console.WriteLine(o2.GetState());

            //Rimuovo un observer
            subject.RemoveObserver(o1);

            //Aggiorno lo stato
            subject.SetState("State 2");

            //Verifico di nuovo gli stati, 
            //lo stato o1 essendo stato eliminato mostra il vecchio stato
            Console.WriteLine(o1.GetState());
            Console.WriteLine(o2.GetState());

            Console.ReadKey();
        }
    }
}
