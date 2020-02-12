
using System.Collections.Generic;

/// <summary>
/// La classe che contiene gli observer e che notifica gli aggiornamenti di stato
/// </summary>
public class Subject
  {
    
    /// <summary>
    /// Lo stato del subject
    /// </summary>
    private string _state ;

    /// <summary>
    /// La lista degli observer
    /// </summary>
    private List<Observer> _observers = new List<Observer>();
 
    public void AddObserver(Observer observer)
    {
      _observers.Add(observer);
    }
 
    public void RemoveObserver(Observer observer)
    {
      _observers.Remove(observer);
    }


    /// <summary>
    /// Metodo che permette di settare uno stato, e aggiorna i vari observer
    /// </summary>
    public void SetState(string state){
      _state = state;
      UpdateObservers();
    }

    /// <summary>
    /// Metodo che ritorna lo stato attuale
    /// </summary>
    public string GetState(){
      return _state;
    }
 
    /// <summary>
    /// Metodo che notifica i vari observer ogni volta che avviene un aggiornamento dello stato
    /// </summary>
    private void UpdateObservers()
    {
      foreach (var observer in _observers)
      {
        observer.Update(_state);
      }
    }


  }