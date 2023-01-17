package com.axis.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.axis.model.Room;
import com.axis.roomdto.RoomDto;
import com.axis.service.RoomService;



@RestController
@RequestMapping("/hotel/room")
@CrossOrigin(origins="*")
public class RoomController {
	
	@Autowired
	RoomService roomService;
	
	@GetMapping("/greet")
	public String greet() {
		return roomService.greet();
	}
	
	@PostMapping("/addRoom")
	public ResponseEntity<RoomDto> addRoom(@RequestBody RoomDto roomdto){
		RoomDto roomdto2 = roomService.addRoom(roomdto);
		return new ResponseEntity<RoomDto>(roomdto2, HttpStatus.OK);
	}
	
	@GetMapping("/getAllRooms")
	public ResponseEntity<List<RoomDto>> getAllRooms(){
		List<RoomDto> roomdtos = roomService.getAllRooms();
		return new ResponseEntity<List<RoomDto>>(roomdtos, HttpStatus.OK);
	}
	
	/*@GetMapping("/getRoom/{room_no}")
	public ResponseEntity<List<RoomDto> >getRoomsById(@PathVariable int roomNo){
		List<RoomDto> roomdtos = roomService.getRoomByRoomNo(roomNo);
		return new ResponseEntity<List<RoomDto>>(roomdtos, HttpStatus.OK);
	}*/
	
	@GetMapping("/getRoom/{room_no}")
	public ResponseEntity<List<Room> >getRoomByRoomNo(@PathVariable int room_no){
		Room room = roomService.getRoomByRoomNo(room_no);
				//.orElseThrow(() -> new ResourceNotFoundException("Book not found with id :" + id));
		List<Room> rooms = new ArrayList<>();
		rooms.add(room);
		return ResponseEntity.ok(rooms);
	}
	/*
	@PutMapping("/updateRoom/{roomNo}")
	public ResponseEntity<RoomDto> updateRoom(@PathVariable int roomNo,@RequestBody RoomDto roomDto){
		return new ResponseEntity<RoomDto>(roomService.updateRoom(roomNo, roomDto),HttpStatus.OK);
	}
*/
	@PutMapping("/updateRoom/{room_no}")
	public ResponseEntity<Room> updateRoom(@PathVariable int room_no,@RequestBody Room room){
		return new ResponseEntity<Room>(roomService.updateRoom(room_no, room),HttpStatus.OK);
	}
	@DeleteMapping("/deleteRoom/{room_no}")
	public ResponseEntity<String> deleteRoom(@PathVariable int room_no){
		return new ResponseEntity<String>(roomService.deleteRoom(room_no),HttpStatus.OK);
	}

}
