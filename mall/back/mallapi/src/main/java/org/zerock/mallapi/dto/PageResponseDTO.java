package org.zerock.mallapi.dto;


import javafx.util.converter.TimeStringConverter;
import lombok.Builder;
import lombok.Data;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Data
public class PageResponseDTO<E> {

    //dto목록 데이터
    private List<E> dtoList;

    private List<Integer> pageNumList;

    private PageRequestDTO pageRequestDTO;

    //이전, 다음 페이지
    private boolean prev, next;

    //페이지의 총 데이터 , 시작번호, 다음번호, 전체페이지 현재 페이지
    private int totalCount, prevPage, nextPage, totalPage, current;

    @Builder(builderMethodName = "withAll")
    public PageResponseDTO(List<E> dtoList, PageRequestDTO pageRequestDTO, long total){

        this.dtoList = dtoList;
        this.pageRequestDTO = pageRequestDTO;
        //long타입 써도 되지만 익숙학 int로..
        this.totalCount = (int)total;

        // (10 카운트 중)끝페이지를 먼저 계산!
        // 현재 페이지 / 10.0 -> 올림 -> 곱하기 10
        int end = (int)Math.ceil(pageRequestDTO.getPage() / 10.0) * 10;

        //시작페이지
        int start = end - 9;

        //진짜 마지막 페이지
        //전체 페이지의 수 / 글의 수 -> 올림
        int last = (int)(Math.ceil(totalCount/(double)pageRequestDTO.getSize()));

        end = end > last ? last : end;

        //1페이지가 아니면 무조건 이전페이지는 있음
        this.prev = start > 1;

        //totalCount 값이 end페이지가 한 페이지당 몇 개씩 있는지 계산하고 그것보다 크면 next가 생겨야 함
        this.next = totalCount > end * pageRequestDTO.getSize();

        //start부터 end까지 리스트
        this.pageNumList = IntStream.rangeClosed(start, end).boxed().collect(Collectors.toList());

        //이전 페이지 번호 - 없을 수도 있고 있을 수도 있음
        this.prevPage = prev ? start -1 : 0;

        //다음 페이지 번호
        this.nextPage = next ? end + 1 : 0;


    }

}
