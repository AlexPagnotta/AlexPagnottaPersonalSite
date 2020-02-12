/// <summary>
/// La classe abstract dell'observer
/// </summary>
public abstract class Observer
{

protected string _state;

public abstract void Update(string state);

public abstract string GetState();

}


public class Observer1 : Observer{


    /// <summary>
    /// Metodo che aggiorna lo stato
    /// </summary>
    public override void Update(string state){
        _state = state;
    }


    /// <summary>
    /// Metodo che ritorna lo stato
    /// </summary>
    public override string GetState(){
        return "Lo stato dell'observer 1 è '" +  _state + "'";
    }

}

public class Observer2 : Observer{


    /// <summary>
    /// Metodo che aggiorna lo stato
    /// </summary>
    public override void Update(string state){
        _state = state;
    }


    /// <summary>
    /// Metodo che ritorna lo stato
    /// </summary>
    public override string GetState(){
        return "Lo stato dell'observer 2 è '" +  _state + "'";
    }

}