package com.axis.service;

import java.util.List;

import com.axis.model.Room;
import com.axis.roomdto.RoomDto;

public interface RoomService {
	
	public String greet();
	public RoomDto addRoom(RoomDto roomdto);
	public List<RoomDto> getAllRooms();
	public Room getRoomByRoomNo(int room_no);
	public Room updateRoom(int room_no,Room room);
	public String deleteRoom(int room_no);

}
