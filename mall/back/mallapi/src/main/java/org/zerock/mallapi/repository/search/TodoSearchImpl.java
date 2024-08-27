package org.zerock.mallapi.repository.search;

import com.querydsl.jpa.JPQLQuery;
import lombok.extern.log4j.Log4j2;
import org.hibernate.QueryTimeoutException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.zerock.mallapi.domain.QTodo;
import org.zerock.mallapi.domain.Todo;

@Log4j2
public class TodoSearchImpl extends QuerydslRepositorySupport implements TodoSearch {

    public TodoSearchImpl() {
        super(Todo.class);
    }

    @Override
    public Page<Todo> search1() {

        log.info("search1................");

        //쿼리를 날리기 위한 객체
        QTodo todo = QTodo.todo;

        JPQLQuery<Todo> query = from(todo);

        //제목에 1인 글자가 들어가있는 쿼리문 찾아!
        query.where(todo.title.contains("1"));

        Pageable pageable = PageRequest.of(1,10, Sort.by("tno").descending());

        this.getQuerydsl().applyPagination(pageable, query);

        //쿼리를 실행하는 메서드. 목록 데이터 를 가져옴
        query.fetch();

        //fetchCount() => Long타입
        query.fetchCount();

        return null;
    }
}
