package api.Services;

import api.ApplicationConfig;
import api.Entity.Car;
import com.google.gson.Gson;
import javax.json.JsonObject;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("car") //Path ==URL

public class CarService {
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    
    public Response cadastrarVeiculos(JsonObject body){
        
    }
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response findAllVehicles(){
        return Response.status(200).entity(new Gson().toJson(c));
    }
    
    public Response VehicleRegistration(JsonObject body){
        
        String model = body.getString("model");
        String renavan = body.getString("renavan");
        String color = body.getString("color");
        String photograph = body.getString("photograph");
        int year = body.getInt("year");
        double value = body.getJsonNumber("value").doubleValue();
        boolean sold = body.getBoolean("sold");
        
        //Creating car with informações que vieram da requisição
        Car c = new Car(model, renavan, color, year, value, photograph, sold);
        
        //Cadastra no banco de dados (fake)
        ApplicationConfig.list.add(c);
        
        //Retorna a resposta para o front
        return Response.status(201).entity(new Gson().toJson(c)).build();
      
    }
}
