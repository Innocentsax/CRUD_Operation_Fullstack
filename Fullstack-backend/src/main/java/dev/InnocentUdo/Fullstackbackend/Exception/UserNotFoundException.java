package dev.InnocentUdo.Fullstackbackend.Exception;

public class UserNotFoundException  extends RuntimeException{

    public UserNotFoundException(Long id){
        super("Could not found the user with id");
    }
}
